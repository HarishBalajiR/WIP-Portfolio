import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    year: "2025",
    name: "Lumen Analytics",
    blurb: "Real-time dashboard platform for SaaS teams. Sub-100ms p95 across 12M events/day.",
    tags: ["Next.js", "Postgres", "WebSockets"],
    accent: "from-primary/30 to-transparent",
  },
  {
    year: "2024",
    name: "Northwind Banking",
    blurb: "Re-platformed legacy banking portal. WCAG AA, 3× faster TTI, dark mode shipped.",
    tags: ["React", "Design System", "a11y"],
    accent: "from-accent/30 to-transparent",
  },
  {
    year: "2024",
    name: "Echo CMS",
    blurb: "Headless CMS with collaborative block editor and AI-assisted content suggestions.",
    tags: ["TypeScript", "tRPC", "OpenAI"],
    accent: "from-primary/30 to-accent/20",
  },
  {
    year: "2023",
    name: "Field Notes",
    blurb: "Open-source markdown journaling app. 4.2k stars, featured on GitHub Trending.",
    tags: ["Tauri", "Rust", "React"],
    accent: "from-accent/30 to-primary/20",
  },
];

const Work = () => {
  return (
    <section id="work" className="relative py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs text-muted-foreground mb-4">/ 02 — SELECTED WORK</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Things I've <em className="text-gradient not-italic">built</em>.
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
            ALL PROJECTS →
          </a>
        </div>

        <ul className="space-y-3">
          {projects.map((p, i) => (
            <li key={p.name}>
              <a
                href="#"
                className="group relative grid md:grid-cols-12 gap-4 items-center px-5 md:px-8 py-7 rounded-2xl border border-border bg-card/40 hover:bg-card transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-3">
                  <div className="font-display text-2xl md:text-3xl text-foreground group-hover:translate-x-1 transition-transform duration-500">
                    {p.name}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">{p.year}</div>
                </div>
                <div className="md:col-span-5 text-muted-foreground group-hover:text-foreground/90 transition-colors">
                  {p.blurb}
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="md:col-span-1 justify-self-end">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-500" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
