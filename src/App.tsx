import { useState, useEffect } from "react";
import DotGrid from "./components/DotGrid";
import "./App.css";
import Introduction from "./pages/introduction";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300); // delay animation
    return () => clearTimeout(timer);
  }, []);

  return (
    // Wrapper
    <div className="relative text-gray-300 px-70 font-quicksand">
      {/* Solid background */}
      <div className="absolute inset-0 bg-black -z-20" />

      {/* DotGrid overlay background*/}
      <div className="absolute inset-0 -z-10">
        <DotGrid
          dotSize={50}
          gap={15}
          baseColor="#000000"
          activeColor="#510000"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Introduction section */}
    <div className="flex items-center justify-center min-h-screen px-6">
      <Introduction />
    </div>

      {/* Other sections */}
      <div className="min-h-screen bg-gray-500/80 flex items-center justify-center">
        <h2 className="text-3xl">About</h2>
                {/* Glassmorphism container */}
        <div className="w-full h-[50%] p-8 rounded-xl flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/20 shadow-lg">
        </div>
      </div>
      <div className="min-h-screen bg-gray-600/80 flex items-center justify-center">
        <h2 className="text-3xl">Section 3</h2>
      </div>
      <div className="min-h-screen bg-gray-700/80 flex items-center justify-center">
        <h2 className="text-3xl">Section 4</h2>
      </div>
    </div>
  );
}

export default App;
