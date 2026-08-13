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
    const introShown = sessionStorage.getItem("introShown");

    const START_DELAY_MS = introShown ? 100 : 3900;

    const timer = setTimeout(() => {
      setMounted(true);
    }, START_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`relative lg:w-1/2 w-full md:h-[70vh] h-fit lg:px-25 px-8 pt-25 flex flex-col items-start justify-start `}
    >
      {/* <div
        className={`absolute w-6/7 md:w-3/4 md:top-40 top-25 dark:bg-amber-700 bg-blue-500  md:h-60 h-30 ${
          mounted ? "animate-morphy" : "opacity-0"
        }`}
      /> */}
      <h1
        className={` font-extrabold dark:mix-blend-normal text-white lg:text-7xl text-5xl md:leading-20 tracking-wide ${reveal(
          mounted,
        )}`}
      >
        We Make Solutions,
        <br /> We Create Ideas...
      </h1>

      <p
        className={`mt-4  mix-blend-difference text-start lg:text-3xl text-xl text-blue-500 ${reveal(
          mounted,
          "delay-150",
        )}`}
      >
        voxmint Digital Marketing Company
      </p>

      <p
        className={`mix-blend-difference text-white text-md mt-10 gap-1 list-disc list-inside md:leading-6 ${reveal(
          mounted,
          "delay-300",
        )}`}
      >
        ● Digital Marketing&nbsp;&nbsp;&nbsp; ● Creative
        Designs&nbsp;&nbsp;&nbsp; ● Content Creation&nbsp;&nbsp; ● High-end
        Website Development And Management&nbsp;&nbsp;&nbsp; ● Search Engine
        Optimization&nbsp;&nbsp;&nbsp; ● Social Media Management
      </p>

      <div className={reveal(mounted, "delay-500") + "relative"}>
        <Button
          transparent
          className="
    mt-10 absolute z-50
    text-blue-400 font-medium
    border border-blue-400/30
    transition-all duration-300 ease-out
    hover:border-blue-500
    hover:-translate-y-0.5
    hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)]
  "
          onClick={() => console.log("button clicked")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default IntroSection;
