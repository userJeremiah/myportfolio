import { Figma, Pen, FileText, GitBranch, Palette, Code } from "lucide-react";

const designTools = [
  { name: "Figma", icon: Figma },
  { name: "Adobe XD", icon: Palette },
  { name: "Sketch", icon: Pen },
  { name: "Framer", icon: Code },
];

const writingTools = [
  { name: "Notion", icon: FileText },
  { name: "Markdown", icon: Code },
  { name: "Git", icon: GitBranch },
  { name: "VS Code", icon: Code },
];

export function SectionSkills() {
  return (
    <section className="bg-[var(--color-bg-light)] px-4 md:px-8 py-[var(--space-xl)]" data-name="Section/Skills">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-[var(--space-xl)] text-center">
          <h2 className="text-[var(--color-primary)] mb-[var(--space-sm)]">Skills & Tools</h2>
          <div className="bg-[var(--color-accent)] h-[4px] w-[80px] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-xl)]">
          {/* Design Tools */}
          <div className="bg-[var(--color-surface)] rounded-[12px] p-[var(--space-lg)] border border-[var(--color-border)]">
            <h3 className="text-[var(--color-primary)] mb-[var(--space-lg)] text-center">Design Tools</h3>
            <div className="grid grid-cols-2 gap-[var(--space-lg)]">
              {designTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-[var(--space-md)] p-[var(--space-md)] rounded-lg hover:bg-[var(--color-bg-light)] transition-colors"
                    data-name={`Icon/Tool/${tool.name}`}
                  >
                    <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[var(--color-primary)]">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Writing Tools */}
          <div className="bg-[var(--color-surface)] rounded-[12px] p-[var(--space-lg)] border border-[var(--color-border)]">
            <h3 className="text-[var(--color-primary)] mb-[var(--space-lg)] text-center">Writing Tools</h3>
            <div className="grid grid-cols-2 gap-[var(--space-lg)]">
              {writingTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-[var(--space-md)] p-[var(--space-md)] rounded-lg hover:bg-[var(--color-bg-light)] transition-colors"
                    data-name={`Icon/Tool/${tool.name}`}
                  >
                    <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[var(--color-primary)]">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
