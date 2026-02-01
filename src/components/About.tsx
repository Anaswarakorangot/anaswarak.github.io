import { Code, Cpu, Globe, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive and interactive web applications",
  },
  {
    icon: Code,
    title: "Algorithms",
    description: "Strong foundation in DSA and problem-solving",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Hardware-software integration experience",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical approach to real-world challenges",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading mx-auto">
              A passionate developer focused on building impactful solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="glass-card p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a <span className="text-foreground font-medium">Computer Science undergraduate</span> at{" "}
                  <span className="text-primary">Amrita Vishwa Vidyapeetham, Coimbatore</span>, 
                  with hands-on experience in web development, algorithms, and embedded systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My core strengths lie in <span className="text-foreground font-medium">problem-solving</span>, 
                  designing <span className="text-foreground font-medium">scalable systems</span>, 
                  and applying technology to solve real-world challenges with clean, maintainable code.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">4+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">7.5</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card-hover p-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
