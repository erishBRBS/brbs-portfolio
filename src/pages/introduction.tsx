import { useEffect, useState } from "react";
import me from "./assets/me.png";

function Introduction() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300); // delay animation
    return () => clearTimeout(timer);
  }, []);

  return (
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
  );
}

export default Introduction;
