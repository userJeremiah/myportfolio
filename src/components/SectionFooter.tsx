import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export function SectionFooter() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:jeremiah@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
  ];

  return (
    <footer className="bg-[var(--color-bg-dark)] px-4 md:px-8 py-[var(--space-xl)]" data-name="Section/Footer">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[var(--space-lg)]">
          {/* Logo/Brand */}
          <div>
            <p className="text-white">{"J<"}</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-[var(--space-md)]">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[var(--color-surface)] rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors group"
                  aria-label={link.label}
                  data-name={`Icon/Social/${link.label}`}
                >
                  <Icon className="w-5 h-5 text-[var(--color-primary)] group-hover:text-[var(--color-bg-dark)] transition-colors" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <div>
            <p className="text-[var(--color-secondary)]">
              © {currentYear} Jeremiah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
