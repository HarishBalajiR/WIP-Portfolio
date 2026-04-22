import { useQuery } from "@tanstack/react-query";

const ONE_HOUR = 1000 * 60 * 60;

export type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
};

export type GitHubStats = {
  publicRepos: number;
  followers: number;
  following: number;
  topLanguages: string[];
  contributionsLastYear: number;
};

export type CodeforcesStats = {
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  contests: number;
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export function useLeetCodeStats(handle: string) {
  return useQuery({
    queryKey: ["leetcode", handle],
    staleTime: ONE_HOUR,
    queryFn: async (): Promise<LeetCodeStats> => {
      const data = await fetchJson<any>(
        `https://leetcode-stats-api.herokuapp.com/${handle}`,
      );
      if (data.status && data.status !== "success") {
        throw new Error(data.message || "LeetCode error");
      }
      return {
        totalSolved: data.totalSolved ?? 0,
        easySolved: data.easySolved ?? 0,
        mediumSolved: data.mediumSolved ?? 0,
        hardSolved: data.hardSolved ?? 0,
        ranking: data.ranking ?? 0,
        acceptanceRate: data.acceptanceRate ?? 0,
      };
    },
  });
}

export function useGitHubStats(handle: string) {
  return useQuery({
    queryKey: ["github", handle],
    staleTime: ONE_HOUR,
    queryFn: async (): Promise<GitHubStats> => {
      const [user, repos, contribs] = await Promise.all([
        fetchJson<any>(`https://api.github.com/users/${handle}`),
        fetchJson<any[]>(
          `https://api.github.com/users/${handle}/repos?per_page=100&sort=updated`,
        ),
        fetchJson<any>(
          `https://github-contributions-api.jogruber.de/v4/${handle}?y=last`,
        ).catch(() => ({ total: { lastYear: 0 } })),
      ]);

      const langCount = new Map<string, number>();
      repos.forEach((r) => {
        if (r.language) langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1);
      });
      const topLanguages = [...langCount.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([l]) => l);

      const contributionsLastYear =
        contribs?.total?.lastYear ??
        Object.values(contribs?.total ?? {}).reduce(
          (a: number, b: any) => a + (typeof b === "number" ? b : 0),
          0,
        );

      return {
        publicRepos: user.public_repos ?? 0,
        followers: user.followers ?? 0,
        following: user.following ?? 0,
        topLanguages,
        contributionsLastYear: Number(contributionsLastYear) || 0,
      };
    },
  });
}

export function useCodeforcesStats(handle: string) {
  return useQuery({
    queryKey: ["codeforces", handle],
    staleTime: ONE_HOUR,
    queryFn: async (): Promise<CodeforcesStats> => {
      const [info, rating] = await Promise.all([
        fetchJson<any>(
          `https://codeforces.com/api/user.info?handles=${handle}`,
        ),
        fetchJson<any>(
          `https://codeforces.com/api/user.rating?handle=${handle}`,
        ).catch(() => ({ result: [] })),
      ]);
      if (info.status !== "OK") throw new Error(info.comment || "Codeforces error");
      const u = info.result?.[0] ?? {};
      return {
        rating: u.rating ?? 0,
        maxRating: u.maxRating ?? 0,
        rank: u.rank ?? "unrated",
        maxRank: u.maxRank ?? "unrated",
        contests: rating.result?.length ?? 0,
      };
    },
  });
}
