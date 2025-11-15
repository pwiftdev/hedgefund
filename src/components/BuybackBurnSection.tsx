import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BuybackBurnSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-hedge-bright rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-hedge-medium rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main message */}
          <div 
            ref={contentRef}
            className={`text-center transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              $HEDGE is deflationary,
              <br />
              <span className="bg-gradient-to-r from-hedge-bright to-hedge-medium bg-clip-text text-transparent">
                all creator fees are used to trim the hedge.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuybackBurnSection;
