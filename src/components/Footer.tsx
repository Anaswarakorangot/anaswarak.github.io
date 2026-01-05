import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border bg-card/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Name & Role */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-gradient mb-1">Anaswara K</div>
              <div className="text-sm text-muted-foreground">
                Aspiring Full-Stack Developer
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/anaswarakorangot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/anaswara-k"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <div className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                © {currentYear} Anaswara K. Built with
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
