import { useState, useEffect } from "react";
import DotGrid from "./components/DotGrid";
import "./App.css";
import Introduction from "./pages/introduction";
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
          dotSize={30}
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
      <div className="flex items-center justify-center min-h-screen">
        <Introduction />
      </div>

    </div>
  );
}

export default App;