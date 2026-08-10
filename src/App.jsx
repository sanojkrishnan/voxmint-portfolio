import FirstMountLoad from "./Components/ui/FirstMountLoad";
import Header from "./Components/ui/Header";
import IntroSection from "./Components/ui/IntroSection";
import Robo3D from "./Components/ui/Robo3D";

function App() {
  return (
    <>
      <FirstMountLoad />
      <div className="relative w-full h-screen bg-black">
        <Header />
        <div className="w-full h-500"></div>
        <div className="lg:flex absolute block w-full h-screen top-0 right-0 z-1">
          <IntroSection />
          <Robo3D />
        </div>
        <div className="w-full h-50"></div>

        {/* real app content goes here */}
      </div>
    </>
  );
}

export default App;
