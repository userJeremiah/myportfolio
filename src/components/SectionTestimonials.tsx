import { Quote } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    quote: "Jeremiah's designs are not only beautiful but also incredibly functional. His attention to detail and user-centric approach made our product stand out.",
    author: "Sarah Chen",
    role: "Product Manager, TechCorp",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjA2NDA3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    quote: "Working with Jeremiah was a game-changer. His technical writing made complex features accessible to our users, significantly reducing support tickets.",
    author: "Michael Rodriguez",
    role: "Engineering Lead, StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3MTU1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    quote: "His ability to bridge design and documentation is exceptional. Jeremiah creates cohesive experiences that delight both users and developers.",
    author: "Emily Thompson",
    role: "CEO, DesignHub",
    avatar: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MDY4MjI4NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function SectionTestimonials() {
  return (
    <section className="bg-[var(--color-surface)] px-4 md:px-8 py-[var(--space-xl)]" data-name="Section/Testimonials">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-[var(--space-xl)] text-center">
          <h2 className="text-[var(--color-primary)] mb-[var(--space-sm)]">What People Say</h2>
          <div className="bg-[var(--color-accent)] h-[4px] w-[80px] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-lg)]">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-[var(--color-bg-light)] border-[var(--color-border)] rounded-[12px] p-[var(--space-lg)] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_8px_24px_rgba(0,0,0,0.1)]"
              data-name="Card/Testimonial"
            >
              <Quote className="w-10 h-10 text-[var(--color-accent)] mb-[var(--space-md)]" />
              <p className="text-[var(--color-secondary)] mb-[var(--space-lg)] italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-[var(--space-md)]">
                <Avatar className="w-12 h-12" data-name="Avatar/Client">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[var(--color-primary)]">{testimonial.author}</p>
                  <p className="text-[var(--color-secondary)]">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
