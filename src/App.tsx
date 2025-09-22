import { useState, useEffect } from "react";
import DotGrid from "./components/DotGrid";
import "./App.css";
import Introduction from "./pages/introduction";
import Sphere from "./pages/sphere";
import About from "./pages/about";

function App() {
  return (
    // Wrapper
    <div className="relative text-gray-300 font-quicksand">
      {/* Solid background */}
      <div className="absolute inset-0 bg-black -z-20" />
        {/* DotGrid overlay background*/}
        <div className="absolute inset-0 -z-10">
          <DotGrid
            dotSize={20}
            gap={15}
            baseColor="#000000"
            activeColor="#510000"
            proximity={200}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        
        
        {/* Introduction section */}
        <div className="flex items-center justify-center min-h-screen">
          <Introduction />
        </div>

        {/* Spehere section */}
        <div className="flex items-center justify-center min-h-screen">
          <Sphere />
        </div>

        {/* About section */}
        <div className="flex items-center justify-center min-h-screen ">
          <About />
        </div>

    </div>
  );
}

export default App;
