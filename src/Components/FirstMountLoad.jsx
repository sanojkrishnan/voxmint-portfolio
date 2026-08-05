import { useEffect, useRef, useState } from "react";
import LogoTypeOne from "./LogoTypeOne";

export default function FirstMountLoad(onFinish) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Computed once, before any StrictMode double-invoke of the effect
  const alreadyShownRef = useRef(
    typeof window !== "undefined" &&
      sessionStorage.getItem("introShown") === "true",
  );

  useEffect(() => {
    if (alreadyShownRef.current) return;
    sessionStorage.setItem("introShown", "true"); // idempotent, safe to call twice

    setMounted(true);

    const raf = requestAnimationFrame(() => setVisible(true));
    const fadeTimer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 5500);
    const removeTimer = setTimeout(() => setMounted(false), 6000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center dark:bg-gray-900 bg-white transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <LogoTypeOne animate />
    </div>
  );
}
