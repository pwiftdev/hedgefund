import { Sprout, Lock, Zap, Globe, Users, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose $HEDGE?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hedge-medium to-hedge-bright mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              The most sophisticated decentralized shrubbery technology in the market. Probably.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-hedge-bright to-hedge-medium flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-7 h-7 text-primary-foreground" />
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
