import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'py-20 px-6',
        inView && 'animate-in',
        className
      )}
    >
      {children}
    </section>
  );
}