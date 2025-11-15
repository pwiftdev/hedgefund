import { useState, useEffect } from "react";
import hedgeLogo from "@/assets/hedge-logo-main.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      {/* Glass effect overlay */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/0 to-transparent pointer-events-none" />
      )}
      
      {/* Subtle border glow */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hedge-bright/30 to-transparent" />
      )}
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg group-hover:shadow-hedge-bright/50 transition-all duration-300 group-hover:scale-110">
              <img 
                src={hedgeLogo} 
                alt="HEDGE Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-hedge-dark via-hedge-medium to-hedge-bright bg-clip-text text-transparent">
                HEDGE
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Hedge Fund
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Benefits", id: "benefits" },
              { label: "The HEDGER", id: "hedger" },
              { label: "Roadmap", id: "roadmap" },
              { label: "Tokenomics", id: "tokenomics" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-hedge-bright to-hedge-medium group-hover:w-[calc(100%-1.5rem)] transition-all duration-300 rounded-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("cta")}
              className="px-6 py-2.5 bg-gradient-to-r from-hedge-medium to-hedge-bright text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-hedge-bright/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/10"
            >
              Buy $HEDGE
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-foreground">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
