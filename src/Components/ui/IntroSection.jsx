import { useEffect, useState } from "react";
import Button from "./Button";

// Shared transition + stagger delay per element. Tailwind's delay-* utilities
// are core classes, so no config changes needed.
const reveal = (mounted, delay = "") =>
  `transition-all duration-700 ease-out ${delay} ${
    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;

function IntroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wait 6s before revealing — e.g. to let a hero loader/3D model finish
    // first. Adjust START_DELAY_MS below if 6s changes.
    const START_DELAY_MS = 3900;
    const timer = setTimeout(() => setMounted(true), START_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative lg:w-1/2 w-full lg:h-screen h-fit md:px-25 px-8 pt-30 flex flex-col items-start justify-start `}
    >
      <div
        className={`absolute w-6/7 md:w-3/4 md:top-40 top-25 dark:bg-gray-900 animate-bounce bg-blue-500  md:h-60 h-30 ${
          mounted ? "animate-morphy" : "opacity-0"
        }`}
      />
      <h1
        className={` font-extrabold text-white  dark:text-blue-500 md:text-7xl text-5xl lg:leading-25 tracking-wide ${reveal(
          mounted,
        )}`}
      >
        We Make Solutions,
        <br /> We Create Ideas...
      </h1>

      <p
        className={`mt-4  mix-blend-difference text-start md:text-3xl text-xl dark:text-white text-blue-500 ${reveal(
          mounted,
          "delay-150",
        )}`}
      >
        voxmint Digital Marketing Company
      </p>

      <p
        className={`mix-blend-difference dark:text-gray-300 text-white text-xs mt-10 gap-1 list-disc list-inside md:leading-6 ${reveal(
          mounted,
          "delay-300",
        )}`}
      >
        ● Digital Marketing&nbsp; ● Creative Designs&nbsp; ● Content
        Creation&nbsp; ● High-end Website Development And Management&nbsp; ●
        Search Engine Optimization&nbsp; ● Social Media Management
      </p>

      <div className={reveal(mounted, "delay-500") + "relative"}>
        <Button
          background="dark"
          className={"mt-10 absolute z-50"}
          onClick={() => console.log("button clicked")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default IntroSection;
