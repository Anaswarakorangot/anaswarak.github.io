import { Award, GraduationCap } from "lucide-react";

const workshops = [
  {
    title: "Docker Workshop",
    organization: "Amrita Vishwa Vidyapeetham",
    icon: Award,
  },
  {
    title: "Generative AI Workshop",
    organization: "IIT Madras",
    icon: GraduationCap,
  },
];

export const Workshops = () => {
  return (
    <section id="workshops" className="py-20 md:py-32 relative bg-card/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">Workshops & Training</h2>
            <p className="section-subheading mx-auto">
              Continuous learning and skill development
            </p>
          </div>

          {/* Workshops Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.title}
                className="glass-card-hover p-6 flex items-start gap-4 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <workshop.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{workshop.title}</h3>
                  <p className="text-muted-foreground">{workshop.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
