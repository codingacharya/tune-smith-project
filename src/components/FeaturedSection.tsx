
import React from 'react';
import { cn } from '@/lib/utils';

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ 
  title,
  subtitle,
  className,
  children
}) => {
  return (
    <section className={cn("mb-8", className)}>
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-sm text-music-muted mt-1">{subtitle}</p>}
        </div>
        <button className="text-sm font-medium text-music-muted hover:text-music-text transition-colors">
          See all
        </button>
      </div>
      {children}
    </section>
  );
};

export default FeaturedSection;
