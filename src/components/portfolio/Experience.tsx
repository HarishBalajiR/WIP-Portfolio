const roles = [
  {
    period: "2023 — Now",
    company: "Vercel",
    title: "Senior Frontend Engineer",
    desc: "Leading the dashboard performance guild. Shipped a new design system adopted across 14 product surfaces.",
  },
  {
    period: "2021 — 2023",
    company: "Linear",
    title: "Product Engineer",
    desc: "Built the public roadmap, customer requests, and parts of the inline editor. Led accessibility initiative.",
  },
  {
    period: "2018 — 2021",
    company: "Stripe",
    title: "Software Engineer",
    desc: "Worked on the Dashboard team — payments timeline, search, and the design tokens pipeline.",
  },
  {
    period: "2016 — 2018",
    company: "Freelance",
    title: "Full-stack Developer",
    desc: "Shipped marketing sites, e-commerce, and internal tools for early-stage European startups.",
  },
];

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "tRPC", "GraphQL",
  "PostgreSQL", "Redis", "Tailwind", "Figma", "Framer Motion",
  "Playwright", "Vitest", "AWS", "Vercel", "Docker",
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          <div className="font-mono text-xs text-muted-foreground mb-4">/ 03 — EXPERIENCE</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-12">
            A <em className="text-gradient not-italic">decade</em> of shipping.
          </h2>

          <ol className="relative border-l border-border pl-8 space-y-10">
            {roles.map((r) => (
              <li key={r.company} className="relative">
                <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-primary glow-dot" />
                <div className="font-mono text-xs text-muted-foreground">{r.period}</div>
                <div className="mt-1 flex items-baseline gap-3 flex-wrap">
                  <span className="font-display text-2xl text-foreground">{r.company}</span>
                  <span className="text-muted-foreground">— {r.title}</span>
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-lg">{r.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <div className="font-mono text-xs text-muted-foreground mb-4">/ STACK</div>
            <h3 className="font-display text-3xl mb-8">Toolbox</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-secondary border border-border font-mono text-xs hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl border-gradient bg-card relative">
              <div className="font-mono text-xs text-muted-foreground mb-2">CURRENTLY LEARNING</div>
              <div className="font-display text-xl">Rust, WebGPU & spatial UI patterns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
