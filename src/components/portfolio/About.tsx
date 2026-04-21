const stats = [
  { value: "1st", label: "Year of B.E. CSE" },
  { value: "3+", label: "Languages in active use" },
  { value: "∞", label: "Curiosity to learn" },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            A <em className="text-gradient not-italic">curious</em> beginner.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a first-year Bachelor of Engineering student in Computer Science and Engineering at St Joseph's College of Engineering, Chennai. I spend my time learning to code, sharpening my problem-solving, and exploring how real software gets built.
          </p>
          <p className="text-foreground">
            Outside the editor, you'll find me reading, playing chess, or tinkering with side ideas. My goal is simple — keep building, keep improving, and earn a software role at one of the world's best engineering teams.
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
