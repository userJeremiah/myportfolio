import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description: "A seamless shopping experience with intuitive navigation and streamlined checkout process.",
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwNjQ1NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    roles: ["UI/UX Design", "Prototyping"],
    link: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard Platform",
    description: "Clean, data-driven interface for managing complex business workflows and analytics.",
    image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NjA3MDY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    roles: ["Product Design", "User Research"],
    link: "#",
  },
  {
    id: 3,
    title: "Design System Documentation",
    description: "Comprehensive component library with detailed usage guidelines and best practices.",
    image: "https://images.unsplash.com/photo-1758957530781-4ff54e09bee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzYwNzEyNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    roles: ["Design Systems", "Documentation"],
    link: "#",
  },
];

export function SectionProjects() {
  return (
    <section className="bg-[var(--color-bg-light)] px-4 md:px-8 py-[var(--space-xl)]" data-name="Section/Projects">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-[var(--space-xl)] text-center">
          <h2 className="text-[var(--color-primary)] mb-[var(--space-sm)]">Featured Projects</h2>
          <div className="bg-[var(--color-accent)] h-[4px] w-[80px] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]" data-name="Container/Projects/Grid">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="bg-[var(--color-surface)] border-[var(--color-border)] rounded-[12px] overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              data-name="Card/Project"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-[var(--space-md)]">
                <h3 className="text-[var(--color-primary)] mb-[var(--space-sm)]">{project.title}</h3>
                <p className="text-[var(--color-secondary)] mb-[var(--space-md)]">{project.description}</p>
                <div className="flex flex-wrap gap-[var(--space-sm)] mb-[var(--space-md)]">
                  {project.roles.map((role, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-[var(--color-bg-light)] text-[var(--color-secondary)] border border-[var(--color-border)]"
                    >
                      {role}
                    </Badge>
                  ))}
                </div>
                <button 
                  onClick={() => window.open(project.link || '#', '_blank')}
                  className="flex items-center gap-[var(--space-sm)] text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group cursor-pointer"
                  aria-label={`View case study for ${project.title}`}
                >
                  <span className="font-medium">View Case Study</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
