import { useEffect, useState, useRef } from "react";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

function About() {
  const [show, setShow] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="w-full md:w-[80%] lg:w-[70%] flex flex-col items-center min-h-screen gap-5"
    >
      <div className="text-lg lg:text-5xl text-gray-300 lg:mt-20 mb-10 lg:mb-20">ABOUT ME</div>
      <div
        className={`w-full flex flex-col md:flex-row items-center justify-center gap-5 transition-opacity duration-1000 ease-in ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Unang Container */}
        <div className="flex-1 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 bg-black/10 border border-white/10 p-5">
          {/* Nilalaman ng Unang Container */}
          <div className="text-left text-sm text-gray-400">
            <p className="mb-5">
              Hello! I'm{" "}
              <span className="text-[#510000] font-bold">
                John Erish Berboso
              </span>
              , the journey to the world of web development is not easy for an
              average like me. As of now, I can say that I'm far from where I
              started.
            </p>
            <p className="mb-5">
              As time goes by, I've come to realize that this field is all about
              constant growth. I enjoy tackling problems and turning ideas into
              functional, beautiful websites. Every project is a new adventure,
              and I'm excited to see where this path takes me as I continue to
              build, learn, and contribute to the ever-evolving world of
              technology.
            </p>
            <p>
              This industry is one of continuous innovation and I'm committed to
              staying current with the latest technologies and best practices. I
              thrive on new challenges and am eager to collaborate with
              passionate teams to create something meaningful.
            </p>
          </div>
        </div>

        {/* Pangalawang Container */}
        <div className="flex-1 flex justify-center items-center w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 bg-black/10 border border-white/10 p-5">
          {/* The container below needs a defined height */}
          <div className="h-[220px] w-full flex justify-center items-center text-sm md:text-md">
            <Terminal className="h-full">
              <TypingAnimation className="text-xs md:text-sm mt-5 md:mt-4">
                Name:John Erish Berboso
              </TypingAnimation>
              <TypingAnimation className="text-xs md:text-sm">
                Age: 24
              </TypingAnimation>
              <TypingAnimation className="text-xs md:text-sm">
                Location: Meycauayan Bulacan
              </TypingAnimation>
              <TypingAnimation className="text-xs md:text-sm">
                Hobbies: Code, Games, Sports & Fitness, Fashion, Pokemon
              </TypingAnimation>
              <TypingAnimation className="text-xs md:text-sm">
                Motto: "Embrace the struggle; It's the foundation of strength"
              </TypingAnimation>
            </Terminal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
