import FirstMountLoad from "./Components/ui/FirstMountLoad";
import IntroSection from "./Components/ui/IntroSection";
import Robo3D from "./Components/ui/Robo3D";
import LogoTypeOne from "./Components/ui/LogoTypeOne";
import Header from "./Components/ui/Header";
import gradient from "./assets/gradient.png";

function App() {
  return (
    <>
      <FirstMountLoad />
      <div className="relative w-full min-h-screen bg-linear-to-br from-black via-blue-950 to-black">
        <Header />
        <div className="w-fit p-6 pl-8">
          <LogoTypeOne size={30} animate={false} color="#3D5AA8" />
        </div>
        <img
          className="absolute lg:top-0 right-0 opacity-50"
          src={gradient}
          alt="Gradient Image"
        />

        {/* On mobile: normal flex flow, natural height, content stacks and
            grows the parent. On desktop (md+): switch to absolute + h-screen
            for the layered hero layout you already had. */}
        <div className="flex flex-col md:flex-row md:w-full ">
          <IntroSection />
          <Robo3D />
        </div>

        {/* real app content goes here */}
      </div>
    </>
  );
}

export default App;
