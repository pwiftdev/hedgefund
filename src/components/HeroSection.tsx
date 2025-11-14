import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-hedge-executives.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-hedge-bright/10 border border-hedge-bright/20 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4 text-hedge-bright" />
              <span className="text-sm font-medium text-hedge-dark">Decentralized Shrubbery Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              $HEDGE
              <span className="block text-primary mt-2">The Only Hedge Against the Market</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl">
              Stay green, even when the market bleeds. The hedge fund you can actually trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Buy on Pump.fun
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-primary/30 hover:bg-primary/5 hover:border-primary/50">
                Join the Hedge Fund
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-hedge-bright/20 to-hedge-medium/20 blur-3xl" />
            <img 
              src={heroImage} 
              alt="Hedge Fund Executives" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
