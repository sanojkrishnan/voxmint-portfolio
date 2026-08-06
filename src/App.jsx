import FirstMountLoad from "./Components/FirstMountLoad";
import LogoTypeOne from "./Components/LogoTypeOne";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  return (
    <>
      <FirstMountLoad />

      <div className="w-full h-screen bg-white">
        <ThemeToggle />
        <LogoTypeOne size={20} animate={false} color="#3D5AA8" />
        {/* real app content goes here */}
      </div>
    </>
  );
}

export default App;
