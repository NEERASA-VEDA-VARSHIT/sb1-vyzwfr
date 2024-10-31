import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <main className="bg-black text-white">
      <FloatingContact />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}

export default App;