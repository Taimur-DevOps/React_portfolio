import React from 'react';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="py-6 bg-dark-secondary">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}