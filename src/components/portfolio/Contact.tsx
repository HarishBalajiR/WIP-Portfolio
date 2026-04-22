import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "harishbalajir2008@gmail.com";

const socials = [
  { icon: Github, label: "GitHub", handle: "HarishBalajiR", href: "https://github.com/HarishBalajiR" },
  { icon: Linkedin, label: "LinkedIn", handle: "in/HarishBalajiR", href: "https://www.linkedin.com/in/HarishBalajiR" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.12] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
          Let's connect
          <br />
          <em className="text-gradient not-italic">and build.</em>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Open to internships, mentorship, and learning opportunities. Reach out anytime — I'd love to chat.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
          >
            <Mail className="w-5 h-5" />
            Email me
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-foreground/40 transition-colors"
            >
              <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-mono text-xs">{s.handle}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="relative mt-24 max-w-6xl mx-auto px-6 text-center text-xs font-mono text-muted-foreground">
        © 2026 Harish Balaji R. Crafted with care.
      </footer>
    </section>
  );
};

export default Contact;
