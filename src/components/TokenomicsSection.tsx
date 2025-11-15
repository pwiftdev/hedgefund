import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Lock, Droplet, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tokenomics = [
  {
    icon: PieChart,
    label: "Total Supply",
    value: "1,000,000,000",
    description: "$HEDGE tokens",
  },
  {
    icon: Lock,
    label: "Liquidity Locked",
    value: "100%",
    description: "Secured forever",
  },
  {
    icon: Droplet,
    label: "Tax",
    value: "0%",
    description: "Buy & Sell",
  },
  {
    icon: Users,
    label: "Ownership",
    value: "Renounced",
    description: "Community-owned",
  },
];

const TokenomicsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-hedge-bright rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-hedge-medium rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tokenomics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hedge-medium to-hedge-bright mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Transparent, fair, and perfectly pruned for optimal growth.
            </p>
          </div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenomics.map((item, index) => {
              const Icon = item.icon;
              const numericValue = item.value.replace(/[^0-9]/g, '');
              const hasNumeric = numericValue.length > 0;
              
              return (
                <Card 
                  key={index}
                  className={`border-border bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-hedge-bright to-hedge-medium flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-hedge-bright/50 transition-shadow duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="mb-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {hasNumeric && item.label === "Total Supply" ? (
                        <AnimatedCounter 
                          end={parseInt(numericValue)} 
                          duration={2500}
                          separator=","
                          className="bg-gradient-to-r from-hedge-dark via-hedge-medium to-hedge-bright bg-clip-text text-transparent"
                        />
                      ) : hasNumeric && item.value.includes('%') ? (
                        <>
                          <AnimatedCounter 
                            end={parseInt(numericValue)} 
                            duration={2000}
                            suffix="%"
                            className="bg-gradient-to-r from-hedge-dark via-hedge-medium to-hedge-bright bg-clip-text text-transparent"
                          />
                        </>
                      ) : (
                        <span className="bg-gradient-to-r from-hedge-dark via-hedge-medium to-hedge-bright bg-clip-text text-transparent">
                          {item.value}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-hedge-bright/5 border border-hedge-bright/20 rounded-2xl animate-slide-up">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Fair Launch on Pump.fun
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No presale. No team allocation. No venture capitalists with hedge clippers. 
                Just pure, unadulterated community-driven shrubbery. The way nature intended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
