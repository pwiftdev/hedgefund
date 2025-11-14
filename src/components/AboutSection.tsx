import { Shield, Leaf, TrendingUp } from "lucide-react";
import hedgeSphere from "@/assets/hedge-sphere.png";

const AboutSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Is $HEDGE?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hedge-medium to-hedge-bright mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              A sophisticated play on words. A strategic investment vehicle. A perfectly manicured shrubbery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-hedge-bright/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-hedge-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Market Protection</h3>
                  <p className="text-muted-foreground">
                    In traditional finance, a "hedge" protects your portfolio. With $HEDGE, you're protected by actual hedges. It just makes sense.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-hedge-medium/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-hedge-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Always Green</h3>
                  <p className="text-muted-foreground">
                    While other coins crash and burn, $HEDGE remains evergreen. Literally. Because it's a hedge. A bush hedge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-hedge-light/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-hedge-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Growth Potential</h3>
                  <p className="text-muted-foreground">
                    Like any well-maintained hedge, we're committed to organic growth. Trim the excess, nurture the core.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-hedge-bright/30 to-hedge-medium/30 blur-3xl" />
              <img 
                src={hedgeSphere} 
                alt="Hedge Sphere" 
                className="relative w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
