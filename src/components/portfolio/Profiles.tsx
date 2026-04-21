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
  /** card background (solid or gradient) — should match brand */
  bg: string;
  /** brand wordmark color */
  wordmarkColor: string;
  render: (cls: string) => JSX.Element;
};

const profiles: Profile[] = [
  {
    name: "LeetCode",
    handle: "HarishBalajiR",
    href: "https://leetcode.com/u/HarishBalajiR/",
    tagline: "DSA grind · daily problems",
    bg: "bg-gradient-to-b from-neutral-900 to-black",
    wordmarkColor: "#ffffff",
    render: (cls) => <BrandIcon path={siLeetcode.path} hex={siLeetcode.hex} className={cls} />,
  },
  {
    name: "Codeforces",
    handle: "HarishBalajiR",
    href: "https://codeforces.com/profile/HarishBalajiR",
    tagline: "Competitive programming",
    bg: "bg-gradient-to-b from-[#1f2a44] to-[#0b1220]",
    wordmarkColor: "#ffffff",
    render: (cls) => <BrandIcon path={siCodeforces.path} hex="ffffff" className={cls} />,
  },
  {
    name: "AtCoder",
    handle: "HarishBalajiR",
    href: "https://atcoder.jp/users/HarishBalajiR",
    tagline: "Weekend contests",
    bg: "bg-white",
    wordmarkColor: "#000000",
    render: (cls) => <AtCoderMark className={cls} />,
  },
  {
    name: "GitHub",
    handle: "HarishBalajiR",
    href: "https://github.com/HarishBalajiR",
    tagline: "Code, projects, experiments",
    bg: "bg-gradient-to-b from-[#1a1a1a] to-[#0d1117]",
    wordmarkColor: "#ffffff",
    render: (cls) => <BrandIcon path={siGithub.path} hex="ffffff" className={cls} />,
  },
  {
    name: "LinkedIn",
    handle: "in/HarishBalajiR",
    href: "https://www.linkedin.com/in/HarishBalajiR",
    tagline: "Let's connect professionally",
    bg: "bg-gradient-to-b from-[#0a66c2] to-[#004182]",
    wordmarkColor: "#ffffff",
    render: (cls) => <BrandIcon path={siLinkedin.path} hex="ffffff" className={cls} />,
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
              className={`group relative shrink-0 snap-center w-[78vw] sm:w-[420px] md:w-[480px] h-[360px] rounded-3xl border border-border overflow-hidden transition-all duration-700 ${p.bg} ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-40 translate-y-6 scale-[0.94]"
              }`}
              style={{ color: p.wordmarkColor }}
            >
              {/* subtle vignette for depth */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />

              <ArrowUpRight
                className="absolute top-5 right-5 w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all"
                style={{ color: p.wordmarkColor }}
              />

              {/* Hero: large logo + wordmark, centered, fills the box */}
              <div className="relative h-full w-full flex flex-col items-center justify-center px-8">
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                  {p.render("w-full h-full drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]")}
                </div>
                <div
                  className="mt-5 font-display font-bold text-5xl md:text-6xl tracking-tight leading-none text-center"
                  style={{ color: p.wordmarkColor }}
                >
                  {p.name}
                </div>
              </div>

              {/* footer strip with handle + tagline */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-3 flex items-center justify-between bg-black/40 backdrop-blur-sm border-t border-white/10">
                <span className="font-mono text-xs text-white/80">@{p.handle}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">{p.tagline}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Profiles;
