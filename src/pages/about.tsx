import { useEffect, useState } from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300); // delay animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      {/* Container */}
      <div className="w-full h-[50%] p-8 flex justify-between items-center ">
        <ScrollStack className="w-full h-screen scrollbar-hide">
          <ScrollStackItem>
            <h2>Card 1</h2>
            <p>This is the first card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 2</h2>
            <p>This is the second card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 3</h2>
            <p>This is the third card in the stack</p>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
}

export default About;
