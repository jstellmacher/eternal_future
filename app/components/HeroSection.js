import React from 'react';
import { GiOuroboros } from 'react-icons/gi';

const HeroSection = () => (
  <section className="hero relative bg-primary text-white h-screen">
    <video 
      className="absolute top-0 left-0 w-full h-full object-cover" 
      src="/videos/2790139-uhd_3840_2160_25fps.mp4" 
      autoPlay 
      muted 
      loop 
      playsInline
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative container mx-auto text-center flex flex-col justify-center h-full z-10">
      <h1 className="text-5xl font-bold mb-4 text-white hover:text-secondary transition duration-300">Welcome to Eternal Future</h1>
      <p className="text-xl mb-6 text-white hover:text-secondary transition duration-300">
        Your personalized workout solution: Train for Life, 
        <span className="font-bold text-electric-blue bg-white inline-block ml-2 px-2 rounded-xl"> 
          Live for Eternity <GiOuroboros className="inline-block ml-2" />
        </span>
      </p>
      <button className="bg-white hover:bg-blue-300 bg-opacity-80 text-deep-indigo py-3 px-6 rounded font-semibold hover:bg-opacity-100 transition duration-300 mx-auto">Get Started</button>
    </div>
  </section>
);

export default HeroSection;
