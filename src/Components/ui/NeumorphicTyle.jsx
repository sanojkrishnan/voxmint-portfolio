import { useState, useEffect } from "react";
import { cn } from "../../utils/CN";

const animate = `hover:translate-y-0.5 hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.65),inset_-5px_-5px_10px_rgba(255,255,255,0.04)]
  transition-all duration-500`;

// hover:shadow-[inset_5px_5px_10px_rgba(163,177,198,0.45),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] - add this if light theme theme needed

// Flat/sunken starting point for the rise-in animation — flush with the
// surface, no elevation yet. Values are matched to the dark shadow below
// so the handoff from inline style -> Tailwind class is seamless.
const SUNKEN_SHADOW =
  "inset 2px 2px 5px rgba(0,0,0,0.5), inset -2px -2px 5px rgba(255,255,255,0.02)";

export default function Neumorphic({
  children,
  className = "",
  as: Component = "div",
  hover = "animate",
  rise = false, // opt-in: play a "rising from the surface" entrance animation on mount
  riseDelay = 0, // ms, useful for staggering a grid/list of tiles
}) {
  // Starts already "risen" unless the animation was requested.
  const [risen, setRisen] = useState(!rise);

  useEffect(() => {
    if (!rise) return;
    const timeout = setTimeout(() => setRisen(true), 40 + riseDelay);
    return () => clearTimeout(timeout);
  }, [rise, riseDelay]);

  // Only override with inline styles while the entrance animation is
  // actually running. Once risen, fall back to the normal Tailwind classes
  // below so hover / everything else behaves exactly as it did before.
  const entranceStyle =
    rise && !risen
      ? {
          boxShadow: SUNKEN_SHADOW,
          transform: "translateY(4px) scale(0.985)",
        }
      : undefined;

  return (
    <Component
      className={cn(
        // Shape / sizing
        "inline-flex w-fit p-4 rounded-2xl",

        // Light theme
        "bg-oval-200",

        // Dark theme
        "bg-gray-900",

        // // Light neumorphic shadows
        // "shadow-[10px_10px_20px_rgba(163,177,198,0.55),-10px_-10px_20px_rgba(255,255,255,0.8)]",

        // Dark neumorphic shadows
        "shadow-[10px_10px_20px_rgba(0,0,0,0.65),-10px_-10px_20px_rgba(255,255,255,0.03)]",

        // Smooth interaction
        "transition-all duration-300 ease-out",
        rise && !risen && "duration-700", // slower, weightier feel for the rise-in

        //hover animation
        hover === "animate" && animate,
        className,
      )}
      style={entranceStyle}
    >
      {children}
    </Component>
  );
}