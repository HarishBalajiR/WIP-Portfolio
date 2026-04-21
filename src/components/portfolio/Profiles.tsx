import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  siLeetcode,
  siCodeforces,
  siGithub,
  siLinkedin,
} from "simple-icons/icons";

// AtCoder isn't in simple-icons; use inline brand mark
const AtCoderMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <circle cx="32" cy="32" r="30" fill="#222222" />
    <text
      x="50%"
      y="54%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="'Space Grotesk', system-ui, sans-serif"
      fontWeight="800"
      fontSize="28"
      fill="#ffffff"
    >
      AC
    </text>
  </svg>
);

const BrandIcon = ({
  path,
  hex,
  className,
}: {
  path: string;
  hex: string;
  className?: string;
}) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d={path} fill={`#${hex}`} />
  </svg>
);

type Profile = {
  name: string;
  handle: string;
  href: string;
  tagline: string;
  accent: string;
  render: (cls: string) => JSX.Element;
};

const profiles: Profile[] = [
  {
    name: "LeetCode",
    handle: "HarishBalajiR",
    href: "https://leetcode.com/u/HarishBalajiR/",
    tagline: "DSA grind · daily problems",
    accent: "from-amber-500/30 to-orange-500/10",
    render: (cls) => <BrandIcon path={siLeetcode.path} hex={siLeetcode.hex} className={cls} />,
  },
  {
    name: "Codeforces",
    handle: "HarishBalajiR",
    href: "https://codeforces.com/profile/HarishBalajiR",
    tagline: "Competitive programming",
    accent: "from-rose-500/30 to-red-500/10",
    render: (cls) => <BrandIcon path={siCodeforces.path} hex={siCodeforces.hex} className={cls} />,
  },
  {
    name: "AtCoder",
    handle: "HarishBalajiR",
    href: "https://atcoder.jp/users/HarishBalajiR",
    tagline: "Weekend contests",
    accent: "from-sky-500/30 to-cyan-500/10",
    render: (cls) => <AtCoderMark className={cls} />,
  },
  {
    name: "GitHub",
    handle: "HarishBalajiR",
    href: "https://github.com/HarishBalajiR",
    tagline: "Code, projects, experiments",
    accent: "from-violet-500/30 to-fuchsia-500/10",
    render: (cls) => (
      <BrandIcon path={siGithub.path} hex="ffffff" className={cls} />
    ),
  },
  {
    name: "LinkedIn",
    handle: "in/HarishBalajiR",
    href: "https://www.linkedin.com/in/HarishBalajiR",
    tagline: "Let's connect professionally",
    accent: "from-blue-500/30 to-indigo-500/10",
    render: (cls) => <BrandIcon path={siLinkedin.path} hex={siLinkedin.hex} className={cls} />,
  },
];

const Profiles = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            const i = Number((e.target as HTMLElement).dataset.index);
            if (e.isIntersecting) next.add(i);
          });
          return next;
        });
      },
      { root: track, threshold: 0.55 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section id="profiles" className="relative py-24 border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="font-mono text-xs text-muted-foreground mb-3">/ 04 — PROFILES</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              Find me <em className="text-gradient not-italic">across the web</em>
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-xs">
            ← scroll horizontally to reveal each profile →
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2))] scroll-smooth no-scrollbar"
      >
        {profiles.map((p, i) => {
          const isVisible = visible.has(i);
          return (
            <a
              key={p.name}
              data-card
              data-index={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative shrink-0 snap-center w-[78vw] sm:w-[420px] md:w-[480px] h-[360px] rounded-3xl border border-border bg-card overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-40 translate-y-6 scale-[0.94]"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-80`} />
              <div className="absolute inset-0 grid-bg opacity-[0.15]" />

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-background/70 backdrop-blur border border-border flex items-center justify-center p-3">
                    {p.render("w-full h-full")}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
                </div>

                <div>
                  <div className="font-mono text-xs text-muted-foreground mb-2">{p.tagline}</div>
                  <div className="font-display text-4xl md:text-5xl tracking-tight leading-none">
                    {p.name}
                  </div>
                  <div className="mt-3 font-mono text-sm text-muted-foreground">@{p.handle}</div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Profiles;
