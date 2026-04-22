import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Work from "@/components/portfolio/Work";
import Experience from "@/components/portfolio/Experience";
import LiveStats from "@/components/portfolio/LiveStats";
import Profiles from "@/components/portfolio/Profiles";
import Contact from "@/components/portfolio/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Harish Balaji R — CS Freshman & Aspiring Software Engineer";
    const desc = "Portfolio of Harish Balaji R, B.E. Computer Science freshman at St Joseph's College of Engineering, Chennai. Learning full-stack development and problem-solving.";
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
      <LiveStats />
      <Profiles />
      <Contact />
    </main>
  );
};

export default Index;
