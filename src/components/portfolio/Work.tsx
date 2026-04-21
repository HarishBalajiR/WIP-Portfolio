const Work = () => {
  return (
    <section id="work" className="relative py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-16">
          <div>
            
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Projects <em className="text-gradient not-italic">coming soon</em>.
            </h2>
          </div>
        </div>

        <div className="relative rounded-2xl border border-dashed border-border bg-card/40 px-8 py-20 text-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />
          <div className="relative max-w-xl mx-auto space-y-4">
            <div className="font-mono text-xs text-muted-foreground">STATUS: BUILDING</div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              First projects are in the works.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently learning the fundamentals and laying the groundwork for my first real-world projects. This space will soon showcase what I build along the way — full-stack apps, problem-solving experiments, and open-source contributions.
            </p>
            <div className="pt-4">
              <a
                href="https://github.com/HarishBalajiR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors font-mono text-xs"
              >
                FOLLOW MY PROGRESS ON GITHUB →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
