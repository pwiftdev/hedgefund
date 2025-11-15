import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Force light mode for loader
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const phrases = ["THE HEDGE", "AGAINST", "THE MARKET", "$HEDGE"];

  useEffect(() => {
    // Show each phrase for ~500ms
    const phaseTimer = setInterval(() => {
      setCurrentPhase((prev) => {
        if (prev < phrases.length - 1) {
          return prev + 1;
        }
        clearInterval(phaseTimer);
        return prev;
      });
    }, 500);

    // Show button after 2 seconds
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => {
      clearInterval(phaseTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  // Generate random leaves
  const leaves = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: (i / 20) * 5, // Étalement sur 5s pour voir immédiatement des feuilles
    duration: 8 + Math.random() * 7,
    size: 20 + Math.random() * 30,
    opacity: 0.4 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-hedge-bright/5 to-hedge-medium/10 animate-gradient" />
      
      {/* Floating animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-hedge-bright/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-hedge-medium/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-hedge-light/15 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-hedge-bright/10 rounded-full blur-3xl animate-breathe" />
      </div>

      {/* Falling leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute text-hedge-bright"
            style={{
              left: `${leaf.left}%`,
              animation: `leaf-fall ${leaf.duration}s linear infinite`,
              animationDelay: `${leaf.delay}s`,
              fontSize: `${leaf.size}px`,
              opacity: leaf.opacity,
            }}
          >
            <Leaf className="drop-shadow-lg" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Text phases */}
        <div className="mb-12 h-32 flex items-center justify-center">
          {phrases.map((phrase, index) => (
            <h1
              key={index}
              className={`absolute text-5xl md:text-7xl lg:text-8xl font-bold transition-all duration-500 ${
                currentPhase === index
                  ? "opacity-100 scale-100 blur-0"
                  : currentPhase > index
                  ? "opacity-0 scale-95 blur-sm"
                  : "opacity-0 scale-105 blur-sm"
              } ${
                index === 0 || index === 2 || index === 3
                  ? "bg-gradient-to-r from-hedge-dark via-hedge-medium to-hedge-bright bg-clip-text text-transparent"
                  : "text-foreground"
              }`}
            >
              {phrase}
            </h1>
          ))}
        </div>

        {/* Enter button */}
        <div
          className={`transition-all duration-700 ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <Button
            size="lg"
            onClick={onComplete}
            className="text-2xl px-12 py-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative overflow-hidden group animate-glow"
          >
            <span className="relative z-10 flex items-center">
              Enter the Hedge Fund
              <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-hedge-bright to-hedge-medium opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Button>

          <p className="mt-6 text-sm text-muted-foreground animate-pulse">
            Stay green. Always.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
