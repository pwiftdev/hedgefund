import { Wallet, Zap, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import hedgerImage from "@/assets/hedger.png";

const HEDGERSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Immersive background effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-hedge-bright rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hedge-medium rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(110,180,70,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(110,180,70,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <Zap className="w-12 h-12 text-hedge-bright animate-pulse" />
              <h2 className="text-5xl lg:text-7xl font-bold text-foreground">
                THE HEDGER
              </h2>
              <Zap className="w-12 h-12 text-hedge-bright animate-pulse" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-hedge-bright to-transparent mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Stake. Earn. <span className="bg-gradient-to-r from-hedge-bright to-hedge-medium bg-clip-text text-transparent">Daily APY.</span>
            </p>
          </div>

          {/* Main content - Immersive layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Product Image */}
            <div 
              ref={imageRef}
              className={`relative transition-all duration-1000 delay-300 ${
                imageVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
              }`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-hedge-bright/30 to-hedge-medium/30 blur-3xl rounded-3xl animate-pulse" />
              
              {/* Image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-hedge-bright/30 shadow-2xl hover:shadow-[0_0_60px_rgba(110,180,70,0.5)] transition-all duration-500 hover:scale-105 group">
                <div className="absolute inset-0 bg-gradient-to-t from-hedge-bright/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={hedgerImage} 
                  alt="The HEDGER Device" 
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-hedge-bright to-hedge-medium rounded-2xl p-4 shadow-xl border-2 border-background animate-bounce">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  <span className="text-sm font-bold text-primary-foreground">FREE</span>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div 
              ref={contentRef}
              className={`space-y-8 transition-all duration-1000 delay-500 ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Main statement */}
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-hedge-bright/20 hover:border-hedge-bright/50 transition-all duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  A device that lets you stake your{" "}
                  <span className="bg-gradient-to-r from-hedge-bright to-hedge-medium bg-clip-text text-transparent">
                    $HEDGE
                  </span>{" "}
                  tokens and earn daily{" "}
                  <span className="bg-gradient-to-r from-hedge-medium to-hedge-bright bg-clip-text text-transparent">
                    %APY
                  </span>
                </h3>
              </div>

              {/* Key points */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-background/50 border border-border hover:border-hedge-bright/50 transition-all duration-300 text-center">
                  <Wallet className="w-8 h-8 text-hedge-bright mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Cold Wallet</p>
                  <p className="text-xs text-muted-foreground">Secure</p>
                </div>
                <div className="p-6 rounded-xl bg-background/50 border border-border hover:border-hedge-bright/50 transition-all duration-300 text-center">
                  <TrendingUp className="w-8 h-8 text-hedge-medium mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">Daily APY</p>
                  <p className="text-xs text-muted-foreground">Fixed Returns</p>
                </div>
              </div>

              {/* Free access highlight */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-hedge-bright/10 to-hedge-medium/10 border border-hedge-bright/30">
                <p className="text-center text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">Free</span> for holders with{" "}
                  <span className="font-bold text-hedge-bright">2%+ allocations</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center transition-all duration-1000 delay-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-hedge-bright/10 to-hedge-medium/10 border border-hedge-bright/20 backdrop-blur-sm">
              <Zap className="w-6 h-6 text-hedge-bright animate-pulse" />
              <p className="text-lg font-bold text-foreground">
                Coming Q1 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HEDGERSection;
