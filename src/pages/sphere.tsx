import { useEffect, useState, useRef } from "react";
import DomeGallery from "../components/DomeGallery";

function Sphere() {
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
      className="w-full md:w-[80%] lg:w-[60%] flex justify-center h-auto"
    >
      {/*DomeGallery Container */}
      <div
        className={`w-full flex items-center justify-center transition-opacity duration-2000 ease-in ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full h-[100vh] md:h-[70vh] flex items-center justify-center border-b border-white/10 px-3">
          <DomeGallery />
        </div>
      </div>
    </div>
  );
}

export default Sphere;
