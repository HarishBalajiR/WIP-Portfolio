import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import portrait from "../../assets/portrait.png";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
          OPEN TO INTERNSHIPS & COLLABORATIONS
        </div>

        <h1
          className="font-display font-black text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] tracking-tight animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Learning to build <em className="not-italic text-gradient">great</em>
          <br />
          software.
        </h1>

        <div
          className="mt-10 grid md:grid-cols-3 gap-10 items-end animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="md:col-span-2 space-y-6 max-w-xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-medium">Harish Balaji R</span> , a Computer Science freshman @ St Joseph's College of Engineering, Chennai. Currently Exploring full-stack development, sharpening problem-solving, and building toward a career in the tech industry.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
              >
                More about me
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-foreground/40 transition-colors"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-2 ml-1">
                <a aria-label="GitHub" href="https://github.com/HarishBalajiR" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-foreground/40 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/HarishBalajiR" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:border-foreground/40 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative justify-self-end">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-gradient animate-float">
              <img
                src={portrait}
                alt="Portrait of Harish Balaji R"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 font-mono text-xs shadow-card">
              <div className="text-muted-foreground">based in</div>
              <div className="text-foreground">Chennai, IN 🇮🇳</div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-24 overflow-hidden border-y border-border py-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex gap-12 whitespace-nowrap animate-marquee font-display text-3xl md:text-5xl text-muted-foreground/60">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 pr-12">
                <span>Java</span><span>·</span>
                <span className="text-foreground">C++</span><span>·</span>
                <span>Full Stack</span><span>·</span>
                <span className="italic text-gradient">Problem Solving</span><span>·</span>
                <span>DSA</span><span>·</span>
                <span>Web Dev</span><span>·</span>
                <span className="italic">Always Learning</span><span>·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
