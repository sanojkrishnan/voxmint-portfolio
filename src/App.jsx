import FirstMountLoad from "./Components/FirstMountLoad";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <FirstMountLoad />

      <div className="w-full h-screen dark:bg-gray-800">
        <Header />
        {/* real app content goes here */}
      </div>
    </>
  );
}

export default App;
