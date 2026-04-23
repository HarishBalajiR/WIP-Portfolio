const education = [
  {
    period: "2025 — 2029",
    company: "St Joseph's College of Engineering",
    title: "B.E. Computer Science and Engineering",
    desc: "Currently in my first year. Building strong foundations in data structures and fundamentals.",
  },
];

const skills = [
  "Java", "C++", "Full-Stack", "HTML", "CSS", "JavaScript",
  "Problem Solving", "Data Structures", "Algorithms", "Git", "Chess",
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-7">
          
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-12">
            Just <em className="text-gradient not-italic">getting started</em>.
          </h2>

          <ol className="relative border-l border-border pl-8 space-y-10">
            {education.map((r) => (
              <li key={r.company} className="relative">
                <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-primary glow-dot" />
                <div className="font-mono text-xs text-muted-foreground">{r.period}</div>
                <div className="mt-1 flex items-baseline gap-3 flex-wrap">
                  <span className="font-display text-2xl text-foreground">{r.company}</span>
                </div>
                <div className="text-muted-foreground mt-1">{r.title}</div>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-lg">{r.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            
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
              <div className="font-display text-xl">Full-stack development & advanced DSA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
