import { useState, useEffect } from "react";
import DotGrid from "./components/DotGrid";
import "./App.css";
import me from "./assets/me.png";

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

      {/* DotGrid overlay */}
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
      {/* Container */}
      <div className="w-full h-[50%] p-8 flex justify-between items-center">

        {/* Description container */}
        <div
          className={`flex flex-col justify-center w-[50%] h-full transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          <h1 className="text-lg mb-2">It's a pleasure to meet you, I am</h1>
          <h1 className="text-4xl mb-2">John Erish Berboso.</h1>
          <h1 className="text-4xl mb-2 font-bold leading-relaxed bg-gradient-to-t from-[#7f0000] via-[#510000] to-black bg-clip-text text-transparent">
            Writing code with a side of caffeine.
          </h1>
          <div className="text-left text-md w-[60%] text-gray-400">
            <p>
              I aspire to become a Fullstack Web Developer who builds modern, impactful web applications. 
              My passion lies in crafting elegant solutions, whether it’s designing engaging user interfaces 
              or engineering powerful backend systems. Along the way, I embrace challenges as opportunities 
              to grow, learning new technologies that allow me to create experiences that inspire and connect people.
            </p>
          </div>
        </div>

        {/* Image container */}
        <img
          src={me}
          alt="Profile"
          className={`w-1/3 h-auto rounded-full transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        />
      </div>
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
