import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const articles = [
  {
    id: 1,
    title: "Building Accessible Design Systems",
    publication: "Medium",
    date: "March 2025",
    excerpt: "A comprehensive guide to creating inclusive components that work for everyone.",
    link: "#",
  },
  {
    id: 2,
    title: "The Art of Technical Writing for Designers",
    publication: "UX Collective",
    date: "February 2025",
    excerpt: "How to bridge the gap between design and development through clear documentation.",
    link: "#",
  },
  {
    id: 3,
    title: "User Research Methods for Product Teams",
    publication: "Smashing Magazine",
    date: "January 2025",
    excerpt: "Practical approaches to understanding user needs and validating design decisions.",
    link: "#",
  },
];

export function SectionWriting() {
  return (
    <section className="bg-[var(--color-surface)] px-4 md:px-8 py-[var(--space-xl)]" data-name="Section/Writing">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-[var(--space-xl)] text-center">
          <h2 className="text-[var(--color-primary)] mb-[var(--space-sm)]">Writing Samples</h2>
          <div className="bg-[var(--color-accent)] h-[4px] w-[80px] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]" data-name="Container/Writing/List">
          {articles.map((article) => (
            <Card 
              key={article.id}
              className="bg-[var(--color-bg-light)] border-[var(--color-border)] rounded-[12px] p-[var(--space-lg)] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0px_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              data-name="Card/Article"
            >
              <div className="mb-[var(--space-sm)]">
                <span className="text-[var(--color-accent)] uppercase tracking-wider">{article.publication}</span>
                <span className="text-[var(--color-secondary)] mx-[var(--space-sm)]">•</span>
                <span className="text-[var(--color-secondary)]">{article.date}</span>
              </div>
              <h3 className="text-[var(--color-primary)] mb-[var(--space-md)]">{article.title}</h3>
              <p className="text-[var(--color-secondary)] mb-[var(--space-lg)]">{article.excerpt}</p>
              <button 
                onClick={() => window.open(article.link, '_blank')}
                className="flex items-center gap-[var(--space-sm)] text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group cursor-pointer"
                aria-label={`Read more about ${article.title}`}
              >
                <span className="font-medium">Read More</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
