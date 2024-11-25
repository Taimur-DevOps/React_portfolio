import React from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from '@/config/particles';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';

function App() {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;