import { Check, CircleDot, Circle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phases = [
  {
    quarter: "Q4 2025",
    phase: "Phase 1",
    title: "Plant the Seed",
    status: "current",
    items: [
      "Launch on Pump.fun",
      "Build the hedge-lover community",
      "Drop socials + memes",
      "Provide initial liquidity",
    ],
  },
  {
    quarter: "Q1 2026",
    phase: "Phase 2",
    title: "Grow the Bush",
    status: "upcoming",
    items: [
      "Get mid-tier exchange listings",
      "Partner with landscaping brands (for the meme)",
      "Launch merch",
      "Add community voting",
      "Create The HEDGER",
    ],
  },
  {
    quarter: "Q2 2026",
    phase: "Phase 3",
    title: "Global Hedge Movement",
    status: "future",
    items: [
      "Expand worldwide",
      "Create \"Hedge HQ\" (Discord hub)",
      "Launch HEDGE Academy (fun educational content)",
      "IRL garden collaborations",
    ],
  },
  {
    quarter: "Q3 2026",
    phase: "Phase 4",
    title: "The Final Trim",
    status: "future",
    items: [
      "Answer the legendary question: Can a hedge run a hedge fund?",
      "Release a small DeFi/staking meme product",
      "Make one official $HEDGE topiary somewhere",
    ],
  },
];

const RoadmapSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-hedge-bright rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-hedge-medium rounded-full blur-3xl" />
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
              {phases.map((phase, index) => (
                <PhaseItem key={index} phase={phase} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhaseItem = ({ phase, index }: { phase: typeof phases[0], index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isCompleted = phase.status === "completed";
  const isCurrent = phase.status === "current";

  return (
    <div 
      ref={ref}
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start gap-8">
        {/* Status indicator */}
        <div className="hidden lg:flex flex-col items-center gap-2 relative z-10">
          <div className="w-16 h-16 rounded-full border-4 border-background bg-card shadow-lg flex items-center justify-center">
            {isCompleted && (
              <div className="w-10 h-10 rounded-full bg-hedge-bright flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
            )}
            {isCurrent && (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hedge-bright to-hedge-medium animate-pulse flex items-center justify-center">
                <CircleDot className="w-10 h-10 text-primary-foreground" />
              </div>
            )}
            {!isCompleted && !isCurrent && (
              <Circle className="w-8 h-8 text-muted" />
            )}
          </div>
          {/* Quarter label */}
          <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
            {phase.quarter}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-xl hover:border-hedge-bright/50 transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-hedge-bright uppercase tracking-wider">
                  {phase.phase}
                </span>
                <span className="lg:hidden text-xs font-semibold text-muted-foreground">
                  {phase.quarter}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
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
                    isCompleted ? "bg-hedge-bright" : isCurrent ? "bg-hedge-medium" : "bg-muted"
                  }`} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
