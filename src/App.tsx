import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;