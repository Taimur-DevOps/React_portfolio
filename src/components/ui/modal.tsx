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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-btn">Close</button>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <img src={item.image} alt={item.title} />
        <div>
          {item.tech.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div>
          <a href={item.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={item.live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
