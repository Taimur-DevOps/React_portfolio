// src/components/sections/projects.tsx
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { siteConfig } from '@/config/site';
import { Modal } from '../ui/modal'; // import your modal component

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | typeof siteConfig.projects[0]>(null);

  // Open modal with the selected project
  const handleOpenModal = (project: typeof siteConfig.projects[0]) => {
    setSelectedProject(project);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section id="projects" className="bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-dark-primary rounded-xl overflow-hidden"
              onClick={() => handleOpenModal(item)} // Open modal on card click
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-primary/90 z-10" />
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-light-slate mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-neon-blue/10 text-neon-blue rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon-blue transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon-blue transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {selectedProject && (
        <Modal
          item={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </Section>
  );
}
