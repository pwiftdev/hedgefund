import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

interface ParticleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export const ParticleButton = ({ 
  children, 
  className, 
  variant = "default",
  size = "lg",
  ...props 
}: ParticleButtonProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createParticles = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }));

    setParticles(prev => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "relative overflow-hidden group",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-hedge-bright/0 before:via-hedge-bright/20 before:to-hedge-bright/0",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        className
      )}
      onMouseEnter={createParticles}
      {...props}
    >
      {children}
      
      {particles.map((particle, index) => (
        <span
          key={particle.id}
          className="absolute w-1 h-1 bg-hedge-bright rounded-full pointer-events-none animate-particle"
          style={{
            left: particle.x,
            top: particle.y,
            '--angle': `${(index * 45)}deg`,
            animation: `particle-burst 1s ease-out forwards`,
          } as React.CSSProperties}
        />
      ))}
    </Button>
  );
};
