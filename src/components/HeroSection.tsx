import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-hedge-executives.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate random leaves
  const leaves = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 15 + Math.random() * 10,
    size: 20 + Math.random() * 30,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-hedge-bright/5 to-hedge-medium/10 animate-gradient" />
      
      {/* Floating animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-hedge-bright/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-hedge-medium/15 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-hedge-light/15 rounded-full blur-3xl animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-hedge-bright/10 rounded-full blur-3xl animate-breathe" />
      </div>

      {/* Falling leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute text-hedge-bright"
            style={{
              left: `${leaf.left}%`,
              animation: `leaf-fall ${leaf.duration}s linear infinite`,
              animationDelay: `${leaf.delay}s`,
              fontSize: `${leaf.size}px`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          >
            <Leaf className="drop-shadow-lg" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge with glow */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-hedge-bright/10 backdrop-blur-sm border border-hedge-bright/20 rounded-full px-6 py-3 shadow-lg animate-glow hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Sparkles className="w-5 h-5 text-hedge-bright animate-pulse" />
              <span className="text-sm font-semibold text-hedge-dark tracking-wide">Decentralized Shrubbery Technology</span>
            </div>
          </div>
          
          {/* Main headline - with perspective effect */}
          <div className="text-center mb-12 animate-fade-in space-y-6" style={{ animationDelay: "0.2s" }}>
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight transition-transform duration-300"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
              }}
            >
              $HEDGE
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-hedge-dark via-hedge-medium to-hedge-bright bg-clip-text text-transparent leading-tight animate-gradient">
              The Only Hedge Against
              <br />
              the Market
            </h2>
          </div>
          
          {/* Hero image - with hover lift effect */}
          <div 
            className="relative max-w-5xl mx-auto mb-12 animate-scale-in group cursor-pointer" 
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-hedge-bright/30 to-hedge-medium/30 blur-3xl scale-105 animate-breathe" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-hedge-bright/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(110,180,70,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-t from-hedge-bright/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={heroImage} 
                alt="Hedge Fund Executives" 
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Tagline with shimmer effect */}
          <p className="text-center text-2xl md:text-3xl text-muted-foreground font-light mb-12 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.6s" }}>
            Stay green, even when the market bleeds.
            <br />
            <span className="text-foreground font-medium relative inline-block">
              The hedge fund you can actually trust.
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-hedge-bright/20 to-transparent animate-pulse" />
            </span>
          </p>
          
          {/* CTA buttons with enhanced hover */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="text-xl px-8 py-7 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Buy on Pump.fun
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-hedge-bright to-hedge-medium opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-8 py-7 border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Join the Hedge Fund</span>
              <span className="absolute inset-0 bg-hedge-bright/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Button>
          </div>

          {/* Stats row with stagger animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "1s" }}>
            {[
              { value: "100%", label: "Organic Growth" },
              { value: "0%", label: "Tax" },
              { value: "∞", label: "Greenery" },
              { value: "1B", label: "Supply" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 hover:border-hedge-bright/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
