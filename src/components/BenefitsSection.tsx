import { Sprout, Lock, Zap, Globe, Users, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Sprout,
    title: "Unmatched Greenery",
    description: "Our proprietary hedge technology ensures year-round verdancy. No brown patches, ever.",
  },
  {
    icon: Lock,
    title: "Market Protection (Kind Of)",
    description: "While we can't guarantee financial returns, our hedges do provide excellent windbreaks.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Photosynthesis",
    description: "Our blockchain-powered hedges convert sunlight to value at unprecedented rates.",
  },
  {
    icon: Globe,
    title: "Global Hedging Network",
    description: "Join thousands of hedge enthusiasts worldwide. Together, we're reshaping the landscape.",
  },
  {
    icon: Users,
    title: "Community-Driven Pruning",
    description: "Every holder gets a say in how we trim our strategic roadmap. Democracy, but greener.",
  },
  {
    icon: LineChart,
    title: "Sustainable Growth Model",
    description: "Built on the proven principles of topiary excellence and sound agricultural practices.",
  },
];

const BenefitsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Parallax decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-hedge-bright rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-hedge-medium rounded-full blur-3xl" />
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
              Why Choose $HEDGE?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hedge-medium to-hedge-bright mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              The most sophisticated decentralized shrubbery technology in the market. Probably.
            </p>
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className={`border-border bg-card hover:shadow-xl hover:shadow-hedge-bright/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 group ${
                    cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-hedge-bright to-hedge-medium flex items-center justify-center mb-4 shadow-lg group-hover:shadow-hedge-bright/50 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
