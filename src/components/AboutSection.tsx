import { Shield, Leaf, TrendingUp } from "lucide-react";
import hedgeSphereNoBg from "@/assets/hedge-sphere-nobg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-hedge-bright rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-hedge-medium rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Is $HEDGE?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hedge-medium to-hedge-bright mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              A sophisticated play on words. A strategic investment vehicle. A perfectly manicured shrubbery.
            </p>
          </div>

          <div 
            ref={contentRef}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
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

            <div className={`relative transition-all duration-1000 delay-400 ${
              contentVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-hedge-bright/20 to-hedge-medium/20 blur-3xl animate-pulse" />
              <img 
                src={hedgeSphereNoBg} 
                alt="Hedge Sphere" 
                className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 animate-float"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(76, 175, 80, 0.3))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
