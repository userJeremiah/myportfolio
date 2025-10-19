import { useState } from "react";
import { Mail, Linkedin, Twitter, Github, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function SectionContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:jeremiah@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
  ];

  return (
    <section className="bg-[var(--color-bg-light)] px-4 md:px-8 py-[var(--space-xl)]" data-name="Section/Contact">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-[var(--space-xl)] text-center">
          <h2 className="text-[var(--color-primary)] mb-[var(--space-sm)]">Get In Touch</h2>
          <div className="bg-[var(--color-accent)] h-[4px] w-[80px] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-xl)]">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-[var(--space-lg)]">
              <div>
                <label htmlFor="name" className="block text-[var(--color-primary)] mb-[var(--space-sm)]">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[var(--color-surface)] border-[var(--color-border)] rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[var(--color-primary)] mb-[var(--space-sm)]">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[var(--color-surface)] border-[var(--color-border)] rounded-lg"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[var(--color-primary)] mb-[var(--space-sm)]">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[var(--color-surface)] border-[var(--color-border)] rounded-lg resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#212529] text-white py-[14px] px-[24px] rounded-lg hover:bg-[#333333] transition-all flex items-center justify-center gap-[var(--space-sm)] group font-medium shadow-md hover:shadow-lg"
                data-name="Button/Primary"
                aria-label="Send message"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[var(--color-primary)] mb-[var(--space-lg)]">Connect with me</h3>
            <p className="text-[var(--color-secondary)] mb-[var(--space-xl)]">
              Feel free to reach out for collaborations, questions, or just to say hello!
            </p>
            <div className="flex flex-wrap gap-[var(--space-md)]">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[var(--space-sm)] px-[var(--space-lg)] py-[var(--space-md)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-light)] transition-all group"
                    data-name={`Icon/Social/${link.label}`}
                  >
                    <Icon className="w-5 h-5 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors" />
                    <span className="text-[var(--color-primary)]">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
