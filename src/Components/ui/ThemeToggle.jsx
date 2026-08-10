import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun } from "lucide-react";

const THEME_TRANSITION_DELAY = 500;

export default function ThemeToggle() {
  const [exploding, setExploding] = useState(false);
  const { dark, setDark } = useTheme();
  const [animDark, setAnimDark] = useState(dark);
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.overflow = exploding ? "hidden" : "";
  }, [exploding]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);
  const handleClick = () => {
    if (exploding) return;

    const next = !animDark;
    setAnimDark(next);
    setExploding(true);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDark(next);
    }, THEME_TRANSITION_DELAY);
  };
  return (
    <div className="flex items-center gap-2 z-40">
      <div className="relative max-w-20 max-h-20">
        <button
          onClick={handleClick}
          aria-label="Toggle theme"
          className="cursor-pointer relative w-fit h-fit"
        >
          <div
            onAnimationEnd={() => setExploding(false)}
            className={`theme ${animDark ? "bg-gray-950" : "bg-blue-500"} ${
              exploding ? "explode" : "opacity-0"
            } absolute inset-0 w-full h-full rounded-full`}
          ></div>
          {/* Moon */}

          <svg
            className={`absolute inset-0 size-8 fill-blue-200 transition-all duration-300 ease-in-out
            ${
              animDark
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>

          {/* Sun */}
          <Sun
            className={` size-8 fill-amber-500 text-amber-500 transition-all duration-300 ease-in-out
            ${
              !animDark
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 rotate-90"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
