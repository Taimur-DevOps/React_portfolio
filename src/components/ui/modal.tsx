// src/components/ui/modal.tsx
import React from 'react';
import { siteConfig } from '@/config/site'; // Assuming siteConfig contains projects array

// Make sure we use the type of the project objects in siteConfig.projects
type Project = typeof siteConfig.projects[number];

interface ModalProps {
  item: Project; // Type item as a project
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="modal-content relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-auto overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full"
        >
          Close
        </button>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tech.map((tech, index) => (
            <span key={index} className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
