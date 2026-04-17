const stats = [
  { value: "8+", label: "Years shipping production code" },
  { value: "40+", label: "Projects launched" },
  { value: "12", label: "Open-source contributions" },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="font-mono text-xs text-muted-foreground mb-4">/ 01 — ABOUT</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            A <em className="text-gradient not-italic">craftsman</em> at heart.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I bridge the gap between design and engineering, building products that feel as good as they look. From early-stage startups to enterprise platforms, I've shipped interfaces used by millions.
          </p>
          <p className="text-foreground">
            Lately I'm obsessed with: edge-rendered React, type-safe APIs, motion design with intent, and design systems that scale with teams instead of slowing them down.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-border pl-4">
                <div className="font-display text-3xl md:text-4xl text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
