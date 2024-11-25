import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { siteConfig } from '@/config/site';

export function Skills() {
  return (
    <Section id="skills" className="bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {siteConfig.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-dark-primary p-6 rounded-xl hover:shadow-xl 
                         hover:shadow-neon-blue/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <Icon className="w-12 h-12 text-neon-blue group-hover:animate-skill-pulse" />
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                  <div className="w-full bg-dark-secondary rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-neon-blue rounded-full"
                    />
                  </div>
                  <span className="text-sm text-light-slate">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}