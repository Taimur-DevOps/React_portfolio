import React from 'react';
import { Section } from '@/components/ui/section';
import { siteConfig } from '@/config/site';

export function About() {
  const { description, skills } = siteConfig;

  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-2xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <p className="text-lg mb-6">I am a dedicated and enthusiastic developer with a strong passion for creating modern web applications. My expertise spans both frontend and backend technologies, allowing me to build complete, seamless digital solutions. With a focus on delivering high-quality user experiences, I aim to solve real-world problems through technology. Whether it's designing user-friendly interfaces or developing robust backend systems, I bring a well-rounded approach to every project. My goal is to continuously improve my skills and create meaningful, impactful web applications that make a difference for users.</p>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2 flex items-center">
                  <skill.icon className="w-6 h-6 text-blue-500 mr-3" aria-hidden="true" />
                  <div>
                    <h3 className="text-white font-semibold capitalize">{skill.name}</h3>
                    <p className="text-sm text-gray-400">Proficiency: {skill.level}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-lg shadow-xl hover:shadow-neon-blue/20 transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
