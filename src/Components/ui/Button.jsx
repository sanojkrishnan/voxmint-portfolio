import { useEffect, useState } from "react";
import { cn } from "../../utils/CN";

/**
 * Global neumorphic button for VoxMint.
 *
 * Drop this anywhere in the site — it auto-adapts to light/dark theme
 * by watching for a `dark` class on <html> (the standard Tailwind
 * dark-mode strategy). No theme prop needed.
 *
 * Usage:
 *   <Button>Get Started</Button>
 *   <Button variant="secondary">See Our Work</Button>
 *   <Button shape="circle" aria-label="Play"><Play size={18} /></Button>
 *   <Button shape="square" aria-label="Menu"><Menu size={18} /></Button>
 *
 *   // Sitting on a fixed-color section (e.g. a dark hero on an
 *   // otherwise light site, or vice versa) — pins the palette to that
 *   // background instead of following the page's light/dark theme:
 *   <Button background="dark">Get Started</Button>
 *   <Button background="light">Get Started</Button>
 *
 * Responsive by default — no prop needed. Sizes step up automatically:
 *   phone   (<640px):  compact padding/text, 48px icon buttons
 *   tablet  (≥640px):  medium padding/text, 56px icon buttons
 *   desktop (≥768px):  full padding/text, 64px icon buttons
 *
 * Requires: npm install clsx tailwind-merge
 */

// Shape controls geometry only — padding/aspect ratio, not color or shadow.
// "circle" and "square" are meant for icon-only content (pass an
// aria-label since there's no visible text).
// Each shape scales up at Tailwind's sm (tablet, ≥640px) and md (desktop,
// ≥768px) breakpoints, so the button stays comfortably tappable on phone
// without looking oversized on desktop.
const SHAPE_CLASSES = {
  rectangle:
    "rounded-xl px-5 py-2.5 text-sm sm:rounded-2xl sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4",
  square:
    "h-12 w-12 rounded-xl p-0 sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16",
  circle: "h-12 w-12 rounded-full p-0 sm:h-14 sm:w-14 md:h-16 md:w-16",
};

const PALETTE = {
  light: {
    surface: "#e9edf3",
    text: "#5b6577",
    accent: "#2563eb",
    shadowDark: "rgba(163,177,198,0.55)",
    shadowLight: "rgba(255,255,255,0.85)",
  },
  dark: {
    surface: "#161b26",
    text: "#8a94a6",
    accent: "#5eb2ff",
    shadowDark: "rgba(0,0,0,0.7)",
    shadowLight: "rgba(255,255,255,0.045)",
  },
};

function useIsDark() {
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() =>
      setIsDark(root.classList.contains("dark")),
    );
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default function Button({
  children,
  variant = "primary", // "primary" | "secondary"
  shape = "rectangle", // "rectangle" | "square" | "circle"
  background = "auto", // "auto" | "light" | "dark" — pin the palette to a known background
  className,
  onClick,
  type = "button",
  ...props
}) {
  const [pressed, setPressed] = useState(false);
  const autoIsDark = useIsDark();
  // "auto" follows the page's dark-mode class; "light"/"dark" pin the
  // button's own colors regardless of what theme the page is in —
  // for a button placed on a fixed-color section, not the page background.
  const isDark = background === "auto" ? autoIsDark : background === "dark";
  const p = PALETTE[isDark ? "dark" : "light"];
  const isPrimary = variant === "primary";

  const raised = `8px 8px 16px ${p.shadowDark}, -8px -8px 16px ${p.shadowLight}`;
  const pressedShadow = `inset 5px 5px 10px ${p.shadowDark}, inset -5px -5px 10px ${p.shadowLight}`;

  return (
    <button
      type={type}
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "font-semibold tracking-wide transition-all duration-300 ease-out",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",
        SHAPE_CLASSES[shape],
        className,
      )}
      style={{
        backgroundColor: p.surface,
        color: isPrimary ? p.accent : p.text,
        boxShadow: pressed ? pressedShadow : raised,
        transform: pressed ? "translateY(1px) scale(0.99)" : "translateY(0)",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
