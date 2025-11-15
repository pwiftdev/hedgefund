import { Shield, Leaf, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const statements = [
  {
    icon: Shield,
    statement: "We are the hedge against the market",
    description: "When volatility strikes, we stand firm. Your protection in uncertain times.",
    gradient: "from-hedge-bright/20 to-hedge-medium/10",
  },
  {
    icon: Leaf,
    statement: "We are green",
    description: "Sustainable growth, always. Built for the long term, never fading.",
    gradient: "from-hedge-medium/20 to-hedge-bright/10",
  },
  {
    icon: Heart,
    statement: "We are nourishing",
    description: "Growing together, supporting our community, building something real.",
    gradient: "from-hedge-bright/20 to-hedge-medium/10",
  },
];

const BenefitsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-hedge-bright rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-hedge-medium rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div 
            ref={titleRef}
            className={`text-center mb-20 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose $HEDGE?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hedge-medium to-hedge-bright mx-auto" />
          </div>

          {/* Statement blocks */}
          <div className="space-y-8">
            {statements.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <StatementBlock
                  key={index}
                  item={item}
                  index={index}
                  Icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatementBlock = ({ item, index, Icon }: { item: typeof statements[0], index: number, Icon: typeof Shield }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  
  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-2xl opacity-50`} />
                  
                  {/* Content */}
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 hover:border-hedge-bright/50 transition-all duration-500 group">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-hedge-bright to-hedge-medium flex items-center justify-center shadow-lg group-hover:shadow-hedge-bright/50 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-hedge-bright group-hover:to-hedge-medium group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                          {item.statement}
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
    </div>
  );
};

export default BenefitsSection;
