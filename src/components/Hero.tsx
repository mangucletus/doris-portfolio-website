import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Doris Lonta
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-blue-200">
            Broadcast Journalist | Voice for the Voiceless
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl">
            Passionate journalist and advocate for human and community development, 
            amplifying the voices of the vulnerable and telling the stories that matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#portfolio" 
              className="btn btn-primary bg-blue-600 hover:bg-blue-700"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;