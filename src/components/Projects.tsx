import { ExternalLink, Github, Plane, Route, Heart, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Airline Ticket Booking System",
    description: "Responsive flight booking website with flight search, booking interface, form validation, modular UI components and dynamic form handling.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Plane,
    github: null,
    featured: true,
  },
  {
    title: "BFS Maze Game & Visualizer",
    description: "Interactive maze game with DFS-based maze generation, BFS shortest-path visualization with animation, difficulty levels, and optimized rendering.",
    tech: ["React", "TypeScript"],
    icon: Route,
    github: "https://github.com/anaswarakorangot",
    featured: true,
  },
  {
    title: "Smart Health Monitoring Vest",
    description: "Embedded system for real-time health monitoring with heart-rate tracking, fall detection, temperature sensing, and modular firmware architecture.",
    tech: ["STM32", "C", "Sensors"],
    icon: Heart,
    github: "https://github.com/anaswarakorangot",
    featured: true,
  },
  {
    title: "University Service App Prototype",
    description: "Modular, scalable frontend architecture with reusable UI components and accessibility-focused design, intended for backend integration.",
    tech: ["Flutter", "Dart"],
    icon: Smartphone,
    github: null,
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">Featured Projects</h2>
            <p className="section-subheading mx-auto">
              A selection of projects showcasing my technical skills and problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card-hover p-6 md:p-8 group relative overflow-hidden ${
                  project.featured ? "" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                      Featured
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg" asChild>
              <a
                href="https://github.com/anaswarakorangot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View More on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
