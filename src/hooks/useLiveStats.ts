import { useQuery } from "@tanstack/react-query";

const ONE_HOUR = 1000 * 60 * 60;

export type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  contestRating: number;
  currentStreak: number;
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
      const [profile, contest] = await Promise.all([
        fetchJson<any>(
          `https://alfa-leetcode-api.onrender.com/userProfile/${handle}`,
        ).catch(() => null),
        fetchJson<any>(
          `https://alfa-leetcode-api.onrender.com/${handle}/contest`,
        ).catch(() => null),
      ]);

      if (!profile) throw new Error("LeetCode profile unavailable");

      // Compute current streak from submissionCalendar (UNIX day -> count)
      const calendar: Record<string, number> = profile.submissionCalendar ?? {};
      const activeDays = new Set<string>();
      Object.entries(calendar).forEach(([ts, count]) => {
        if (Number(count) > 0) {
          const d = new Date(Number(ts) * 1000);
          activeDays.add(
            `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`,
          );
        }
      });
      const dayKey = (d: Date) =>
        `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`;
      const today = new Date();
      let streak = 0;
      const cursor = new Date(today);
      // If no activity today, start counting from yesterday
      if (!activeDays.has(dayKey(cursor))) {
        cursor.setUTCDate(cursor.getUTCDate() - 1);
      }
      while (activeDays.has(dayKey(cursor))) {
        streak++;
        cursor.setUTCDate(cursor.getUTCDate() - 1);
      }

      return {
        totalSolved: profile.totalSolved ?? 0,
        easySolved: profile.easySolved ?? 0,
        mediumSolved: profile.mediumSolved ?? 0,
        hardSolved: profile.hardSolved ?? 0,
        contestRating: contest?.contestRating
          ? Math.round(contest.contestRating)
          : 0,
        currentStreak: streak,
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
