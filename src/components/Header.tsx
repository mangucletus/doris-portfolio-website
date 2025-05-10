import React, { useState, useEffect } from 'react';
import { Menu, X, Mic } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Mic className="h-6 w-6 text-blue-600" />
          <span className={`font-heading font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            Doris Lonta
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideRight">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#experience" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a 
              href="#portfolio" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a 
              href="#community" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Community
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;