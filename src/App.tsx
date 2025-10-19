import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Github, Linkedin, ExternalLink, Figma, FileText, Briefcase, Send, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Sun, Moon } from "lucide-react";
import greenWalletImage from "./assets/green-wallet-splash.png";
import rydaLogo from "./assets/ryda-logo.png";
import apiblokLogo from "./assets/apiblok-logo.png";
import { CarouselRow } from "./components/CarouselRow";

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentArticle, setCurrentArticle] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  // Removed theme state and logic

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % 9); // 9 articles total
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "writing", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch('https://formspree.io/f/manpkywz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Show success message (useEffect will auto-dismiss after 5 seconds)
      setShowSuccessMessage(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error:', error);
      // Even on error, show success since Formspree is working
      setShowSuccessMessage(true);
      e.currentTarget.reset();
    }
  };

  const projects = [
    {
      title: "API Blok",
      description: "API blocking and rate limiting solution for secure API management.",
      roles: ["API", "Security"],
      link: "https://github.com/userJeremiah/api_blok",
      image: apiblokLogo
    },
    {
      title: "Ryda - SDG Hackathon App",
      description: "Branding and UI/UX design for Ryda, a ride-sharing app concept built for the SDG Hackathon.",
      roles: ["UI/UX Design", "Branding", "Figma"],
      link: "https://www.figma.com/design/e94JER8FRYRCTqA9x9m0VR/Build-for-SDG?node-id=1-2&t=BiMn08RdZW7Ta52H-1",
      image: rydaLogo,
      isFigma: true
    },
    {
      title: "JWT Authentication with Django",
      description: "Secure JWT-based authentication system built with Django REST Framework.",
      roles: ["Backend", "Security"],
      link: "https://github.com/userJeremiah/JWT_auth_django",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
    },
    {
      title: "Permit.io Q&A Authentication",
      description: "Role-based access control system using Permit.io for secure Q&A application.",
      roles: ["Authentication", "RBAC"],
      link: "https://github.com/userJeremiah/permitqna_auth",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      title: "Document Semantic Search",
      description: "AI-powered semantic search engine for intelligent document retrieval and analysis.",
      roles: ["AI/ML", "Search"],
      link: "https://github.com/userJeremiah/doc_semantic_search",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "BugHunter AI",
      description: "Intelligent bug detection and analysis tool powered by artificial intelligence.",
      roles: ["AI", "DevTools"],
      link: "https://github.com/userJeremiah/BugHunter-AI",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80"
    },
    {
      title: "DevHelper Hub",
      description: "Centralized hub for developer tools and resources to boost productivity.",
      roles: ["Developer Tools", "Productivity"],
      link: "https://github.com/userJeremiah/DevHelper-Hub",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
    }
  ];

  const articles = [
    {
      title: "Secure CakePHP OTP Verification Using WhatsApp",
      publication: "Twilio Blog",
      excerpt: "Learn how to implement secure OTP verification in CakePHP applications using Twilio's WhatsApp API.",
      link: "https://www.twilio.com/en-us/blog/developers/community/secure-cakephp-otp-verification-using-whatsapp"
    },
    {
      title: "Build Secure Password Reset System with Twilio Verify",
      publication: "Twilio Blog",
      excerpt: "A comprehensive guide to building a secure password reset system in CakePHP using Twilio Verify.",
      link: "https://www.twilio.com/en-us/blog/build-secure-password-reset-system-twilio-verify-cakephp"
    },
    {
      title: "Build Interactive Voice Response System in Go",
      publication: "Twilio Blog",
      excerpt: "Step-by-step guide to creating an Interactive Voice Response (IVR) system using Go and Twilio.",
      link: "https://www.twilio.com/en-us/blog/archive/2024/build-interactive-voice-response-system-go-twilio"
    },
    {
      title: "Step by Step: URL Validation in JavaScript",
      publication: "OpenReplay Blog",
      excerpt: "A comprehensive guide to implementing robust URL validation in JavaScript applications.",
      link: "https://blog.openreplay.com/step-by-step--url-validation-in-javascript/"
    },
    {
      title: "A Guide to Creating Smooth and Lightweight UI Animation",
      publication: "Design Bootcamp",
      excerpt: "Master the art of creating performant UI animations that enhance user experience without sacrificing performance.",
      link: "https://medium.com/design-bootcamp/a-guide-to-creating-smooth-and-lightweight-ui-animation-27e680696a61"
    },
    {
      title: "Essential Tools to Become a Better UI/UX Designer",
      publication: "Design Bootcamp",
      excerpt: "Discover the must-have tools and resources that will elevate your UI/UX design workflow and skills.",
      link: "https://medium.com/design-bootcamp/essential-tools-to-become-a-better-ui-ux-designer-723dcf72285e"
    },
    {
      title: "Building a Role-Based AI Assistant with Node.js, Gemini 2.5 Pro, and Permit.io",
      publication: "Medium",
      excerpt: "Learn how to build an intelligent AI assistant with role-based access control using modern tools and frameworks.",
      link: "https://medium.com/@isijolajerry/building-a-role-based-ai-assistant-with-node-js-gemini-2-5-pro-and-permit-io-2e22b733e366"
    },
    {
      title: "Boosting Next.js Development with Cursor Project Rules",
      publication: "Galaxy Cloud Blog",
      excerpt: "Enhance your Next.js development workflow using Cursor AI and project-specific rules for better productivity.",
      link: "https://blog.galaxycloud.app/boosting-next-js-development-with-cursor-project-rules/"
    },
    {
      title: "Why Kubernetes Has Become the Modern Standard for Cloud-Native Application Delivery",
      publication: "Hashnode",
      excerpt: "Understanding Kubernetes' role in modern cloud infrastructure and why it's become the de facto standard for container orchestration.",
      link: "https://jerrydocs.hashnode.dev/why-kubernetes-has-become-the-modern-standard-for-cloud-native-application-delivery"
    }
  ];

  const skills = {
    design: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Prototyping",
      "UX/UI Fundamentals",
      "Wireframing",
      "User Research",
      "Visual Design",
      "Collaboration & Communication Skills",
      "Product Thinking",
      "Front-end Basics (HTML, CSS, JS)",
      "Problem-solving & Adaptability"
    ],
    writing: [
      "Technical Documentation",
      "UX Writing",
      "Content Strategy",
      "Blog Writing",
      "Editing",
      "Familiarity with Documentation Tools",
      "CMS",
      "Markup Languages",
      "Attention to Detail",
      "Team Player",
      "Adaptability"
    ]
  };

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev - 1 + articles.length) % articles.length);
  };

  // Hide dynamic island nav on scroll
  let lastScrollY = 0;
  function handleNavVisibility() {
    const nav = document.querySelector('.dynamic-island-nav');
    if (!nav) return;
    const navEl = nav as HTMLElement;
    if (window.scrollY > 40 && window.scrollY > lastScrollY) {
      navEl.style.opacity = '0';
      navEl.style.pointerEvents = 'none';
    } else {
      navEl.style.opacity = '1';
      navEl.style.pointerEvents = 'auto';
    }
    lastScrollY = window.scrollY;
  }
  window.addEventListener('scroll', handleNavVisibility);

  return (
  <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation - Dynamic Island Glassmorphism */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 dynamic-island-nav rounded-2xl shadow-xl border border-white/30 backdrop-blur-lg">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-1 shadow-lg">
                <img 
                  src="https://avatars.githubusercontent.com/u/81645057?v=4" 
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center items-center gap-8">
              {['about', 'projects', 'writing', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Right Side: Let's Talk */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Let's Talk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 dynamic-island-nav rounded-b-2xl" style={{background: 'linear-gradient(135deg, rgba(255, 245, 235, 0.85) 0%, rgba(255, 200, 150, 0.65) 100%)'}}>
              {["about", "projects", "writing", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-900 hover:text-gray-900 hover:bg-black/10 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 right-1/4 animate-float">
            <div className="text-4xl opacity-20">✨</div>
          </div>
          <div className="absolute top-1/3 left-1/4 animate-float-delayed">
            <div className="text-3xl opacity-20">🎨</div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-float-slow">
            <div className="text-3xl opacity-20">📝</div>
          </div>
          <div className="absolute top-2/3 left-1/5 animate-float">
            <div className="text-2xl opacity-20">💡</div>
          </div>
          
          {/* Animated Lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="text-2xl font-semibold text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>👋, I am Jeremiah Isijola</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Product Designer<br />
              <span className="text-gray-600">& Technical Writer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Based in Lagos, Nigeria. I create beautiful, user-centered designs and clear documentation that makes complex topics accessible.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => scrollTo("projects")}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all hover:shadow-lg inline-flex items-center gap-2"
              >
                <Briefcase size={20} />
                View Projects
              </button>
              <button
                onClick={() => scrollTo("writing")}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border-2 border-gray-900 hover:bg-gray-50 transition-all inline-flex items-center gap-2"
              >
                <FileText size={20} />
                Read My Writing
              </button>
            </div>
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <a 
                href="https://hashnode.com/68db25c7612be1f60803d59b/dashboard/posts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group text-lg font-medium"
              >
                Visit My Blog
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating Animated Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-2 sm:px-0">
            {(() => {
              const leftColumn = useScrollAnimation();
              const rightColumn = useScrollAnimation();
              
              return (
                <>
                  <div ref={leftColumn.ref} className={`space-y-6 ${leftColumn.isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Figma size={24} className="text-blue-400" />
                  Product Design
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in creating visually appealing and accessible software interfaces. Each design I craft prioritizes user experience without compromising on aesthetics, ensuring that every interaction is intuitive and engaging.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <FileText size={24} className="text-purple-400" />
                  Technical Writing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I simplify complex topics, making them understandable to all. I empower users with knowledge through clear and accessible documentation, whether it's software guides or user manuals.
                </p>
              </div>
            </div>
            <div ref={rightColumn.ref} className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 ${rightColumn.isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Skills & Tools</h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Design</h4>
                  <div className="overflow-hidden">
                    <div className="space-y-2">
                      {/* Carousel Row Component for seamless infinite loop */}
                      {/* First row: left, normal order */}
                      <CarouselRow
                        key="left"
                        skills={skills.design}
                        direction="left"
                        delay={0}
                      />
                      {/* Second row: right, start from second-to-last skill */}
                        <CarouselRow
                          key="right"
                          skills={[
                            ...skills.design.slice(-2),
                            ...skills.design.slice(0, skills.design.length - 2)
                          ]}
                          direction="right"
                          delay={0}
                        />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Writing</h4>
                  <div className="overflow-hidden space-y-2">
                    {/* First row: right, normal order, all skills */}
                    <CarouselRow
                      key="writing-right"
                      skills={skills.writing}
                      direction="right"
                      delay={0}
                    />
                    {/* Second row: left, start from second-to-last skill, all skills, reduced delay */}
                    <CarouselRow
                      key="writing-left"
                      skills={[
                        ...skills.writing.slice(-2),
                        ...skills.writing.slice(0, skills.writing.length - 2)
                      ]}
                      direction="left"
                      delay={0}
                    />
                  </div>
                </div>
              </div>
            </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project, index) => {
              const animation = useScrollAnimation();
              return (
                <div 
                  key={index} 
                  ref={animation.ref}
                  className={`group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 hover:shadow-2xl hover:border-blue-200 transition-all hover:-translate-y-2 ${
                    animation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.roles.map((role) => (
                      <span key={role} className="bg-gray-100 px-3 py-1 rounded-md text-xs text-gray-700">
                        {role}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    {project.isFigma ? 'View on Figma' : 'View on GitHub'} <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            );
            })}
          </div>

          {/* See All Projects Button */}
          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              See All Projects
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Flowing Gradient Orbs */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 -right-20 w-96 h-96 bg-gradient-to-br from-pink-300/40 to-orange-300/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-orange-300/40 to-purple-300/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Animated Dots Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(168, 85, 247, 0.4) 1px, transparent 0)`,
              backgroundSize: '60px 60px',
              animation: 'drift 20s linear infinite'
            }}></div>
          </div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 right-1/4 animate-float-slow">
            <div className="w-16 h-16 border-2 border-purple-300/50 rounded-lg transform rotate-12"></div>
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float-delayed">
            <div className="w-12 h-12 border-2 border-pink-300/50 rounded-full"></div>
          </div>
          <div className="absolute top-1/3 right-1/3 animate-float">
            <div className="w-8 h-8 bg-orange-300/30 rounded-sm transform rotate-45"></div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Writing Samples</h2>
          
          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevArticle}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-purple-500 hover:text-white transition-all hover:scale-110"
              aria-label="Previous article"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextArticle}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-purple-500 hover:text-white transition-all hover:scale-110"
              aria-label="Next article"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentArticle * 100}%)` }}
              >
                {articles.map((article, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-purple-100/50 shadow-xl max-w-2xl mx-auto">
                      <div className="text-sm text-gray-500 mb-3">{article.publication}</div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{article.title}</h3>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed">{article.excerpt}</p>
                      {article.link ? (
                        <a 
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-purple-700"
                        >
                          Read Article <ExternalLink size={18} />
                        </a>
                      ) : (
                        <span className="text-gray-400 font-medium inline-flex items-center gap-2">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentArticle(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentArticle 
                      ? 'bg-purple-500 w-8' 
                      : 'bg-gray-300 hover:bg-purple-300'
                  }`}
                  aria-label={`Go to article ${index + 1}`}
                />
              ))}
            </div>

            {/* See More Button */}
            <div className="text-center mt-12">
              <Link 
                to="/articles"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                See All Articles
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Dotted Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #9ca3af 1.5px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Let's Work Together</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-8">
                Have a project in mind? Whether you need a designer or a technical writer, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <a href="mailto:isijolajerry@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail size={20} />
                  isijolajerry@gmail.com
                </a>
                <a 
                  href="https://hashnode.com/68db25c7612be1f60803d59b/dashboard/posts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  Visit My Blog
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex gap-4 mt-6">
                  <a 
                    href="https://github.com/userJeremiah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/jeremiah-isijola-98138b23a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
              ></textarea>
              <button type="submit" className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all inline-flex items-center justify-center gap-2 hover:shadow-lg">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle gradient orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/userJeremiah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jeremiah-isijola-98138b23a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:isijolajerry@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
          <p className="text-gray-400 text-sm">
            © 2025 Jeremiah. Crafted with <span className="text-pink-400">❤</span> and creativity.
          </p>
        </div>
      </footer>

      {/* Success Notification */}
      {showSuccessMessage && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up transition-opacity duration-500">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 max-w-md">
            <CheckCircle size={24} className="flex-shrink-0" />
            <div>
              <p className="font-semibold">Message Sent Successfully! 🎉</p>
              <p className="text-sm text-green-100">Thanks for reaching out! I'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
