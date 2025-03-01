import { ArrowRight } from "lucide-react"; // Import the arrow icon from lucide-react
import img from "../assets/Remove background project.png";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const typingPhrases = ["affordable", "local", "trusted"];

function TypingEffect() {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const fullPhrase = typingPhrases[phraseIndex];

      if (isDeleting) {
        setCurrentText(fullPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      } else {
        setCurrentText(fullPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === fullPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="text-blue-400">
      {currentText}
      {showCursor && <span className="text-white">|</span>}
    </span>
  );
}

function Hero() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-start p-8 bg-[#38474E] overflow-hidden min-h-screen">
      <div className="relative flex-1 lg:mr-8 text-center lg:text-left z-10 lg:pt-24 md:pt-20 pt-16">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-white">
          DirePick — <br />
          <span className="text-blue-400">Your </span>
          <TypingEffect />
          <br />
          E-commerce Platform.
        </h1>
        <p className="text-lg lg:text-xl mb-8 text-white">
          From Kezira to Qefira — Everything You Need, One Click Away!
        </p>
        <Button
          variant="default"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-7 px-14 rounded-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex items-center space-x-3 group text-2xl shadow-lg hover:cursor-pointer font-bold mx-auto lg:mx-0"
        >
          <span className="sm:ml-9">Start Shopping</span>
          <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>

      <div className="relative flex-1 mt-8 lg:mt-0 rounded-lg z-10">
        <img
          src={img}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          alt="Shoes and Phone"
        />
      </div>
    </div>
  );
}

export default Hero;
