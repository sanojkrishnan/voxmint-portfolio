import { useState } from "react";
import FirstMountLoad from "./Components/FirstMountLoad";
import LogoTypeOne from "./Components/LogoTypeOne";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && (
        <FirstMountLoad onFinish={() => setIntroFinished(true)} />
      )}

      <div
        className={`w-full h-screen bg-gray-900
          ${introFinished ? "block" : "hidden"}
        `}
      ></div>
      <div
        className={`
          ${introFinished ? "hidden" : "block"}
        `}
      >
        <ThemeToggle />

        <LogoTypeOne size={160} animate={false} color="#3D5AA8" />
      </div>
    </>
  );
}

export default App;
