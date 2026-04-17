import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", handle: "@alexrivera" },
  { icon: Linkedin, label: "LinkedIn", handle: "in/alexrivera" },
  { icon: Twitter, label: "Twitter", handle: "@alex_codes" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.12] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="font-mono text-xs text-muted-foreground mb-6">/ 04 — CONTACT</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
          Let's build
          <br />
          <em className="text-gradient not-italic">something good.</em>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Open to senior roles, freelance briefs, and the occasional advisory chat. I usually reply within a day.
        </p>

        <a
          href="mailto:hello@alexrivera.dev"
          className="group inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
        >
          <Mail className="w-5 h-5" />
          hello@alexrivera.dev
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </a>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-foreground/40 transition-colors"
            >
              <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-mono text-xs">{s.handle}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="relative mt-24 max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs font-mono text-muted-foreground">
        <div>© 2026 Alex Rivera. Crafted with care.</div>
        <div>Designed & built in Lisbon · v1.0</div>
      </footer>
    </section>
  );
};

export default Contact;
