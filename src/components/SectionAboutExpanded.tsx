import { Download } from "lucide-react";

export function SectionAboutExpanded() {
  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV
    // For now, show a message or link to your CV
    const cvUrl = "/path-to-your-cv.pdf"; // Update this with your actual CV path
    window.open(cvUrl, "_blank");
  };

  return (
    <section className="bg-[var(--color-bg-dark)] px-4 md:px-8 py-[var(--space-xl)]" data-name="Section/About">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-[var(--space-xl)] text-center">
          <h2 className="text-[#F7F3BC] mb-[var(--space-sm)]">About Me</h2>
          <div className="bg-[var(--color-accent)] h-[4px] w-[80px] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-xl)] items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-[var(--space-lg)]">
            <div>
              <h3 className="text-white mb-[var(--space-md)]">Product Design</h3>
              <p className="text-white">
                In <span className="text-[#F7F3BC]">Product Design</span>, I specialize in creating visually appealing and accessible software interfaces. Each design I craft prioritizes user experience without compromising on aesthetics, ensuring that every interaction is intuitive and engaging.
              </p>
            </div>
            
            <div>
              <h3 className="text-white mb-[var(--space-md)]">Technical Writing</h3>
              <p className="text-white">
                As a <span className="text-[#F7F3BC]">Technical Writer</span>, I simplify complex topics, making them understandable to all, empowering users with knowledge through clear and accessible documentation, whether it's software guides or user manuals.
              </p>
            </div>
            
            <div className="pt-[var(--space-md)]">
              <button
                onClick={handleDownloadCV}
                className="bg-[#FFD66B] text-[#1C1C1C] py-[14px] px-[28px] rounded-lg hover:bg-[#FFE08A] transition-all flex items-center gap-[var(--space-sm)] group font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5"
                data-name="Button/Primary"
                aria-label="Download CV"
              >
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
          
          {/* Right Column - Stats or Additional Info */}
          <div className="grid grid-cols-2 gap-[var(--space-lg)]">
            <div className="bg-[var(--color-surface)] bg-opacity-10 rounded-[12px] p-[var(--space-lg)] text-center">
              <p className="text-[#F7F3BC] mb-[var(--space-sm)]">5+</p>
              <p className="text-white">Years Experience</p>
            </div>
            <div className="bg-[var(--color-surface)] bg-opacity-10 rounded-[12px] p-[var(--space-lg)] text-center">
              <p className="text-[#F7F3BC] mb-[var(--space-sm)]">50+</p>
              <p className="text-white">Projects Completed</p>
            </div>
            <div className="bg-[var(--color-surface)] bg-opacity-10 rounded-[12px] p-[var(--space-lg)] text-center">
              <p className="text-[#F7F3BC] mb-[var(--space-sm)]">30+</p>
              <p className="text-white">Articles Written</p>
            </div>
            <div className="bg-[var(--color-surface)] bg-opacity-10 rounded-[12px] p-[var(--space-lg)] text-center">
              <p className="text-[#F7F3BC] mb-[var(--space-sm)]">100%</p>
              <p className="text-white">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
