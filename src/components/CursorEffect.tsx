import { useEffect, useState, useRef } from "react";

const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      // Smooth interpolation for main cursor
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }

      // Slightly slower for outer glow
      if (outerRef.current) {
        const outerX = currentX + (targetX - currentX) * 0.1;
        const outerY = currentY + (targetY - currentY) * 0.1;
        outerRef.current.style.left = `${outerX}px`;
        outerRef.current.style.top = `${outerY}px`;
      }

      // Trailing effect follows cursor
      if (trailRef.current) {
        trailRef.current.style.left = `${currentX}px`;
        trailRef.current.style.top = `${currentY}px`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Start animation loop
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor glow - smooth tracking */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-hedge-bright to-hedge-medium blur-md shadow-[0_0_20px_rgba(110,180,70,0.6)]" />
      </div>

      {/* Outer glow ring - slower tracking for depth */}
      <div
        ref={outerRef}
        className="fixed pointer-events-none z-[9998] transition-opacity duration-500"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 0.5 : 0,
        }}
      >
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-hedge-bright/20 to-hedge-medium/20 blur-2xl" />
      </div>

      {/* Trailing effect */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9997] transition-opacity duration-700"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <div className="absolute w-3 h-3 rounded-full bg-hedge-bright/50 blur-sm" />
        <div className="absolute w-2 h-2 rounded-full bg-hedge-medium/50 blur-sm animate-pulse" style={{ animationDelay: "0.2s", transform: "translate(8px, -8px)" }} />
      </div>
    </>
  );
};

export default CursorEffect;

