
import React, { useEffect } from 'react';
import ThreeBackground from '../components/ThreeBackground';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "Ivan Tereshchenko | Full-Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050713]/80 to-[#0c1a36]/80 overflow-hidden relative">
      <ThreeBackground />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
