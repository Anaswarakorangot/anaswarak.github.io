import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Workshops } from "@/components/Workshops";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Anaswara K | Aspiring Full-Stack Developer";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Portfolio of Anaswara K - Computer Science undergraduate and aspiring full-stack developer with experience in web development, algorithms, and embedded systems.");
    }
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Workshops />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
