import { useEffect, useState } from "react";
import me from "../assets/me.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import "../App.css";

function Introduction() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300); // delay animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 border border-amber-300">
      {/* Container - flex-col on mobile, flex-row on md screens */}
      <div className="w-full md:w-[80%] lg:w-[60%] flex flex-col-reverse md:flex-row items-center justify-between border border-amber-300">
        {/* Description container */}
        <div
          className={`flex flex-col justify-center w-full md:w-[50%] transition-all duration-1000 ease-out p-4 md:p-0
            ${
              show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
        >
          <h1 className="text-lg mb-2 text-center md:text-left">
            It's a pleasure to meet you, I am
          </h1>
          <h1 className="text-4xl mb-2 text-center md:text-left">
            John Erish Berboso.
          </h1>
          <h1 className="text-3xl mb-2 font-bold leading-relaxed bg-gradient-to-b md:bg-gradient-to-t from-[#7f0000] via-[#510000] to-[#340000] bg-clip-text text-transparent text-center md:text-left animate-slide-bg translate-z-0">
            Writing code with a side of caffeine.
          </h1>
          <div className="text-center md:text-left text-md text-gray-400">
            <p className="w-full md:w-[90%] mx-auto md:mx-0">
              I aspire to become a Fullstack Web Developer who builds modern,
              impactful web applications. My passion lies in crafting elegant
              solutions, whether it’s designing engaging user interfaces or
              engineering powerful backend systems. Along the way, I embrace
              challenges as opportunities to grow, learning new technologies
              that allow me to create experiences that inspire and connect
              people.
            </p>
          </div>
          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="w-fit mt-6 px-6 py-2 bg-gradient-to-r from-[#7f0000] via-[#510000] to-black text-white text-xs rounded-full hover:from-[#510000] hover:to-[#7f0000] transition-colors duration-300">
              View My Work
              <BsArrowUpRightCircleFill className="inline-block ml-3 mb-1" />
            </button>
          </div>
        </div>

        {/* Image container */}
        <div
          className={`w-full md:w-1/3 flex justify-center p-4 transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          <img
            src={me}
            alt="Profile"
            className="w-2/3 md:w-full h-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
