import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Doris Lonta</h3>
            <p className="text-gray-400">Broadcast Journalist | Voice for the Voiceless</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="#home" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Doris Lonta. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for impactful journalism
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;