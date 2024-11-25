import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function Hero() {
  useEffect(() => {
    gsap.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="hero-content max-w-4xl mx-auto text-center opacity-0 transform translate-y-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-neon-blue">{siteConfig.name}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">{siteConfig.title}</p>
        <div className="flex justify-center space-x-6">
          <Button variant="neon" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            Get in touch
          </Button>
          <Button variant="neon" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
            View my work
          </Button>
        </div>
      </div>
    </section>
  );
}