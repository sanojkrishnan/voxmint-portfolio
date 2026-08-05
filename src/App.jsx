import FirstMountLoad from "./Components/FirstMountLoad";
import LogoTypeOne from "./Components/LogoTypeOne";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  return (
    <>
      <FirstMountLoad />
      <ThemeToggle />
      <LogoTypeOne size={160} animate={false} color="#3D5AA8" />

      <div
        className="
 bg-white
 text-black
 dark:bg-black
 dark:text-white
 p-10
 "
      >
        Theme Test
      </div>
    </>
  );
}

export default App;
