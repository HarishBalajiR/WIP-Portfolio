import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Work from "@/components/portfolio/Work";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Alex Rivera — Senior Full-Stack Engineer";
    const desc = "Portfolio of Alex Rivera, senior full-stack engineer crafting fast, accessible web experiences with React, TypeScript and modern tooling.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    const canonicalHref = window.location.origin + "/";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
