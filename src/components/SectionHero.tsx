import MacBookPro141 from "../imports/MacBookPro141";

export function SectionHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[982px] w-full overflow-hidden" id="hero">
      {/* Background - Figma Import */}
      <div className="absolute inset-0 pointer-events-none">
        <MacBookPro141 />
      </div>
      
      {/* Interactive Navigation Overlay - Clean header design */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-1 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              type="button"
              onClick={() => scrollToSection('hero')}
              className="font-['Work_Sans',_sans-serif] font-bold text-[#212529] text-xs hover:text-gray-700 transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-300 rounded-sm px-0.5"
              aria-label="Go to top"
            >
              {"J<"}
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex gap-3 items-center" role="navigation" aria-label="Main navigation">
            <button 
              type="button"
              onClick={() => scrollToSection('projects')}
              className="text-[#212529] text-[11px] font-['Work_Sans',_sans-serif] font-normal hover:text-gray-600 transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-300 rounded-sm px-1 py-0.5"
              aria-label="Go to Designs section"
            >
              Designs
            </button>
            <button 
              type="button"
              onClick={() => scrollToSection('writing')}
              className="text-[#212529] text-[11px] font-['Work_Sans',_sans-serif] font-normal hover:text-gray-600 transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-gray-300 rounded-sm px-1 py-0.5"
              aria-label="Go to Writing Samples section"
            >
              Writing Samples
            </button>
            <button 
              type="button"
              onClick={() => scrollToSection('about')}
              className="text-[#212529] text-[11px] font-['Work_Sans',_sans-serif] font-normal hover:text-gray-600 transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-gray-300 rounded-sm px-1 py-0.5"
              aria-label="Go to About Me section"
            >
              About Me
            </button>
          </nav>
          
          {/* Contact Button */}
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="bg-[#212529] text-white px-2.5 py-1 rounded-sm font-['Work_Sans',_sans-serif] font-medium text-[11px] hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 shadow-sm hover:shadow"
            aria-label="Go to Contact section"
          >
            Reach Out
          </button>
        </div>
      </div>
    </div>
  );
}
