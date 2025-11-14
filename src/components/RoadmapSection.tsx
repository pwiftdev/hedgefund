import { Check, CircleDot, Circle } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Planting the Seed",
    status: "completed",
    items: [
      "Launch on Pump.fun",
      "Build community of hedge enthusiasts",
      "Establish social presence",
      "Initial liquidity provision",
    ],
  },
  {
    phase: "Phase 2",
    title: "Expanding the Bush Fund",
    status: "current",
    items: [
      "Major exchange listings",
      "Strategic partnerships with actual landscaping companies",
      "Launch merchandise store (hedge clippers, gardening gloves)",
      "Community governance implementation",
    ],
  },
  {
    phase: "Phase 3",
    title: "Global Hedging Initiative",
    status: "upcoming",
    items: [
      "International expansion to all major gardens",
      "Hedge Fund HQ establishment",
      "Launch $HEDGE Academy for aspiring topiarists",
      "Potential acquisition of small island nation to create hedge paradise",
    ],
  },
  {
    phase: "Phase 4",
    title: "The Great Hedge Awakening",
    status: "future",
    items: [
      "Achieve sentience (hedges only)",
      "Replace traditional banking system with hedges",
      "Convert entire financial district into topiary garden",
      "Finally answer the question: 'Can a hedge run a hedge fund?'",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hedge Growth Plan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-hedge-medium to-hedge-bright mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Our strategic roadmap to becoming the world's leading decentralized shrubbery fund.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-hedge-bright via-hedge-medium to-muted" />

            <div className="space-y-12">
              {phases.map((phase, index) => {
                const isCompleted = phase.status === "completed";
                const isCurrent = phase.status === "current";
                
                return (
                  <div 
                    key={index}
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-8">
                      {/* Status indicator */}
                      <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border-4 border-background bg-card shadow-lg relative z-10">
                        {isCompleted && (
                          <div className="w-10 h-10 rounded-full bg-hedge-bright flex items-center justify-center">
                            <Check className="w-5 h-5 text-primary-foreground" />
                          </div>
                        )}
                        {isCurrent && (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hedge-bright to-hedge-medium animate-pulse">
                            <CircleDot className="w-10 h-10 text-primary-foreground" />
                          </div>
                        )}
                        {!isCompleted && !isCurrent && (
                          <Circle className="w-8 h-8 text-muted" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                          <div className="mb-4">
                            <span className="text-sm font-semibold text-hedge-bright uppercase tracking-wider">
                              {phase.phase}
                            </span>
                            <h3 className="text-2xl font-bold text-foreground mt-2">
                              {phase.title}
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {phase.items.map((item, itemIndex) => (
                              <li 
                                key={itemIndex}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                  isCompleted ? "bg-hedge-bright" : "bg-muted"
                                }`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
