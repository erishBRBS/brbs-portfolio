import { useEffect, useState } from "react";
import DomeGallery from "../components/DomeGallery";

function About() {

  return (
    <div className="w-full md:w-[80%] lg:w-[60%] flex flex-col items-center justify-center min-h-screen">
      {/* Container for the DomeGallery and "About Me" text */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* DomeGallery container */}
<div className="w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
    <DomeGallery />
</div>
        {/* "About Me" text container */}
        <div className="text-center mt-8 p-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-2 text-lg">
            This is where you can write a short description about yourself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;