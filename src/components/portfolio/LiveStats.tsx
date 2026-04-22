import { ArrowUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useCodeforcesStats,
  useGitHubStats,
  useLeetCodeStats,
} from "@/hooks/useLiveStats";

const HANDLE = "HarishBalajiR";

type CardShellProps = {
  href: string;
  brand: string;
  accent: string;
  bg: string;
  textColor: string;
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
};

const CardShell = ({
  href,
  brand,
  accent,
  bg,
  textColor,
  isLoading,
  isError,
  children,
}: CardShellProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative rounded-3xl border border-border overflow-hidden p-7 min-h-[280px] flex flex-col transition-transform hover:-translate-y-1 ${bg}`}
    style={{ color: textColor }}
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_60%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />

    <div className="relative flex items-center justify-between mb-6">
      <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">
        {brand}
      </span>
      <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
    </div>

    <div className="relative flex-1 flex flex-col justify-between">
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-16 w-32 bg-white/15" />
          <Skeleton className="h-4 w-40 bg-white/15" />
          <Skeleton className="h-4 w-28 bg-white/15" />
        </div>
      ) : isError ? (
        <div className="space-y-2">
          <div className="font-display text-2xl" style={{ color: accent }}>
            Stats unavailable
          </div>
          <div className="text-sm opacity-70">Visit profile →</div>
        </div>
      ) : (
        children
      )}
    </div>
  </a>
);

const Stat = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-baseline justify-between text-sm opacity-80 border-t border-white/10 pt-2">
    <span className="font-mono text-xs uppercase tracking-wider opacity-70">
      {label}
    </span>
    <span className="font-mono">{value}</span>
  </div>
);

const LiveStats = () => {
  const lc = useLeetCodeStats(HANDLE);
  const gh = useGitHubStats(HANDLE);
  const cf = useCodeforcesStats(HANDLE);

  return (
    <section
      id="stats"
      className="relative py-28 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Numbers, not <em className="text-gradient not-italic">promises</em>.
          </h2>
          <p className="font-mono text-xs text-muted-foreground max-w-xs">
            ​
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* LeetCode */}
          <CardShell
            href={`https://leetcode.com/u/${HANDLE}/`}
            brand="LeetCode"
            accent="#FFA116"
            bg="bg-gradient-to-br from-neutral-900 to-black"
            textColor="#ffffff"
            isLoading={lc.isLoading}
            isError={lc.isError}
          >
            <div>
              <div
                className="font-display font-black text-6xl md:text-7xl leading-none"
                style={{ color: "#FFA116" }}
              >
                {lc.data?.totalSolved ?? 0}
              </div>
              <div className="mt-2 text-sm opacity-80">problems solved</div>
            </div>
            <div className="mt-6 space-y-2">
              <Stat
                label="Easy / Med / Hard"
                value={`${lc.data?.easySolved ?? 0} · ${lc.data?.mediumSolved ?? 0} · ${lc.data?.hardSolved ?? 0}`}
              />
              <Stat
                label="Contest rating"
                value={lc.data?.contestRating ? lc.data.contestRating : "—"}
              />
              <Stat
                label="Current streak"
                value={`${lc.data?.currentStreak ?? 0} days`}
              />
            </div>
          </CardShell>

          {/* GitHub */}
          <CardShell
            href={`https://github.com/${HANDLE}`}
            brand="GitHub"
            accent="#ffffff"
            bg="bg-gradient-to-br from-[#1a1a1a] to-[#0d1117]"
            textColor="#ffffff"
            isLoading={gh.isLoading}
            isError={gh.isError}
          >
            <div>
              <div className="font-display font-black text-6xl md:text-7xl leading-none">
                {gh.data?.contributionsLastYear ?? 0}
              </div>
              <div className="mt-2 text-sm opacity-80">
                contributions · last year
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Stat
                label="Public repos"
                value={gh.data?.publicRepos ?? 0}
              />
              <Stat label="Followers" value={gh.data?.followers ?? 0} />
              <Stat
                label="Top langs"
                value={
                  gh.data?.topLanguages.length
                    ? gh.data.topLanguages.join(" · ")
                    : "—"
                }
              />
            </div>
          </CardShell>

          {/* Codeforces */}
          <CardShell
            href={`https://codeforces.com/profile/${HANDLE}`}
            brand="Codeforces"
            accent="#60a5fa"
            bg="bg-gradient-to-br from-[#1f2a44] to-[#0b1220]"
            textColor="#ffffff"
            isLoading={cf.isLoading}
            isError={cf.isError}
          >
            <div>
              <div
                className="font-display font-black text-6xl md:text-7xl leading-none"
                style={{ color: "#60a5fa" }}
              >
                {cf.data?.rating || "—"}
              </div>
              <div className="mt-2 text-sm opacity-80 capitalize">
                {cf.data?.rank ?? "current rating"}
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Stat label="Max rating" value={cf.data?.maxRating || "—"} />
              <Stat
                label="Max rank"
                value={<span className="capitalize">{cf.data?.maxRank ?? "—"}</span>}
              />
              <Stat label="Contests" value={cf.data?.contests ?? 0} />
            </div>
          </CardShell>
        </div>

        <div className="mt-8 text-center font-mono text-xs text-muted-foreground">
          Auto-refreshes hourly · @{HANDLE} on all platforms
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
