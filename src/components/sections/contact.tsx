import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-heading mb-12">Get In Touch</h2>
        <p className="text-xl mb-8">
          I'm currently open for new opportunities. Whether you have a question or
          just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="neon-button flex items-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button flex items-center space-x-2"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </Section>
  );
}