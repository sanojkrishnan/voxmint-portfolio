import { useState } from "react";
import Spline from "@splinetool/react-spline";
import gradient from "../assets/gradient.png";
import Loader from "./Loader";

export default function Robo3D() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative lg:w-1/2 w-full lg:h-screen h-100">
      <img
        className="absolute lg:top-0 right-0 opacity-50 -z-1"
        src={gradient}
        alt="Gradient Image"
      />

      <div
        className="absolute top-[20%] right-0 w-120 h-0
        dark:shadow-[0_0_700px_15px_rgba(255,255,255,0.5)] shadow-[0_0_700px_15px_rgba(255,255,255,2)]
        rotate-[-30deg] -z-1"
      />

      {/* Loading */}
      {loading && !error && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader />
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              3D model couldn't be loaded.
            </p>

            <button
              onClick={() => {
                setError(false);
                setLoading(true);
              }}
              className="mt-3 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {!error && (
        <>
          <Spline
            scene="https://prod.spline.design/4HnKtTtuXK4Skh49/scene.splinecode"
            onLoad={() => {
              setLoading(false);
            }}
            onError={() => {
              setLoading(false);
              setError(true);
            }}
          />
        </>
      )}
    </div>
  );
}
