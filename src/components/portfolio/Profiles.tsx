import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  siLeetcode,
  siCodeforces,
  siGithub,
} from "simple-icons/icons";
import atcoderLogo from "@/assets/atcoder.png";

// LinkedIn brand path (simple-icons v9 — not exported by name in this build)
const siLinkedin = {
  hex: "0A66C2",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

const AtCoderMark = ({ className }: { className?: string }) => (
  <img src={atcoderLogo} alt="AtCoder logo" className={`${className ?? ""} object-contain`} />
);
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
                  <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                    {p.render("w-full h-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]")}
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
