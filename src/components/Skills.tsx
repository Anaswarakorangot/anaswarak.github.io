import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  Users, 
  Wrench,
  FileCode,
  Braces,
  Terminal,
  BarChart3
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "Dart", "DSA"],
    color: "primary",
  },
  {
    title: "Web & Tools",
    icon: Globe,
    skills: ["React", "HTML", "CSS", "GitHub", "VS Code", "StarUML"],
    color: "accent",
  },
  {
    title: "AI / ML Tools",
    icon: Brain,
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    color: "primary",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["DBMS", "MySQL"],
    color: "accent",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem-solving", "Team Collaboration", "Communication"],
    color: "primary",
  },
];

const getSkillIcon = (skill: string) => {
  const iconMap: { [key: string]: typeof Code2 } = {
    "Python": FileCode,
    "Java": Braces,
    "JavaScript": Terminal,
    "React": Globe,
    "DSA": BarChart3,
  };
  return iconMap[skill] || Wrench;
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-card/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">Technical Skills</h2>
            <p className="section-subheading mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card-hover p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    category.color === "primary" 
                      ? "bg-primary/10 group-hover:bg-primary/20" 
                      : "bg-accent/10 group-hover:bg-accent/20"
                  } transition-colors`}>
                    <category.icon className={`w-5 h-5 ${
                      category.color === "primary" ? "text-primary" : "text-accent"
                    }`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
