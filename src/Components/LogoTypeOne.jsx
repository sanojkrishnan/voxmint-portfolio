import { useEffect, useState } from "react";

export default function ArrowLogo({
  size = 160,
  color = "#3D5AA8",
  animate = true,
}) {
  const [start, setStart] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (!animate) {
      setStart(true);
      setShowName(true);
      return;
    }

    const startTimer = requestAnimationFrame(() => {
      setStart(true);
    });

    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 2500);

    return () => {
      cancelAnimationFrame(startTimer);
      clearTimeout(nameTimer);
    };
  }, [animate]);

  const playing = animate && start;
  const phase = !animate ? "static" : playing ? "playing" : "pending";

  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex items-center justify-center
        ${playing ? "transition-transform duration-1000 ease-in-out" : ""}
    ${playing && !showName ? "translate-x-80" : ""}
    ${showName ? "translate-x-0" : ""}
      `}
      >
        <svg
          className="logo-svg"
          width={size}
          height={size * (108 / 106)}
          viewBox="0 0 106 108"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`logo-path ${phase}`}
            stroke={color}
            fill={color}
            pathLength="1"
            d="M 5,17 L 5,42 L 55,101 L 60,101 L 94,61 L 96,56 L 95,36 L 64,73 L 59,78 L 56,78 Z"
          />

          <path
            className={`top-arrow ${phase}`}
            stroke={color}
            fill={color}
            pathLength="1"
            d="M 101,29 L 101,3 L 74,7 L 79,12 L 58,38 L 34,10 L 9,10 L 57,70 L 95,25 Z"
          />
        </svg>

        <div
          className={` max-w-160
            ${playing ? " transition-all delay-700 duration-700 ease-in-out" : ""}
           
            ${
              showName
                ? "opacity-100 scale-100 translate-x-0 ml-5"
                : "opacity-0 scale-90 ml-0"
            }
          `}
        >
          <img
            src="/src/assets/logo name.png"
            alt="VoxMint Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
