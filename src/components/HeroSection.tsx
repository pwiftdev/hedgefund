import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-hedge-executives.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-hedge-bright/5 to-hedge-medium/10" />
      
      {/* Floating hedge particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-hedge-bright/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-hedge-medium/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-hedge-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-1/3 w-44 h-44 bg-hedge-bright/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-hedge-bright/10 backdrop-blur-sm border border-hedge-bright/20 rounded-full px-6 py-3 shadow-lg">
              <Sparkles className="w-5 h-5 text-hedge-bright" />
              <span className="text-sm font-semibold text-hedge-dark tracking-wide">Decentralized Shrubbery Technology</span>
            </div>
          </div>
          
          {/* Main headline - centered and bigger */}
          <div className="text-center mb-12 animate-fade-in space-y-6" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight">
              $HEDGE
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-hedge-dark via-hedge-medium to-hedge-bright bg-clip-text text-transparent leading-tight">
              The Only Hedge Against
              <br />
              the Market
            </h2>
          </div>
          
          {/* Hero image - larger and centered */}
          <div className="relative max-w-5xl mx-auto mb-12 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-hedge-bright/30 to-hedge-medium/30 blur-3xl scale-105" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-hedge-bright/20">
              <img 
                src={heroImage} 
                alt="Hedge Fund Executives" 
                className="w-full"
              />
            </div>
          </div>
          
          {/* Tagline */}
          <p className="text-center text-2xl md:text-3xl text-muted-foreground font-light mb-12 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.6s" }}>
            Stay green, even when the market bleeds.
            <br />
            <span className="text-foreground font-medium">The hedge fund you can actually trust.</span>
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="text-xl px-8 py-7 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Buy on Pump.fun
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-8 py-7 border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/60 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Join the Hedge Fund
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "1s" }}>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Organic Growth</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">0%</div>
              <div className="text-sm text-muted-foreground">Tax</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Greenery</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1B</div>
              <div className="text-sm text-muted-foreground">Supply</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
