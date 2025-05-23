import React from "react";

const Hero = () => (
  <div className="h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold glow-text">
      Smart Glucose Monitoring
    </h1>
    <p className="mt-4 text-lg md:text-xl max-w-2xl">
      Using ESP32 + ML to help patients track, analyze, and share their blood glucose history with ease.
    </p>
    <a href="#features" className="mt-8 px-6 py-3 bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition">
      Explore Features
    </a>
  </div>
);
export default Hero;
