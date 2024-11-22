import React, { useState, useEffect } from "react";
import Image from "next/image";
// import wave from "../public/wave.png"; // Adjust path if needed

const LanguageSection: React.FC = () => {
  const [languageIndex, setLanguageIndex] = useState<number>(0);
  const languages: string[] = [
    "Hello","Bonjour", "Hola",  "ⴰⵣⵓⵍ ⴼⵍⴰⵡⵏ", "مرحبا"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000); // Change language every 2 seconds

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, [languages.length]);

  return (
    <div className="hidden md:block">
      <div>
        <h2 className=" font-bold tracking-wide font-['Tahu'] text-4xl ">
          {languages[languageIndex]}
        </h2>
      </div>
    </div>
  );
};

export default LanguageSection;
