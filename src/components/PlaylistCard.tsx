
import React from 'react';
import { cn } from '@/lib/utils';

interface PlaylistCardProps {
  title: string;
  description: string;
  coverImage: string;
  className?: string;
  gradient?: boolean;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  title,
  description,
  coverImage,
  className,
  gradient = false
}) => {
  return (
    <div className={cn(
      "music-card relative overflow-hidden h-[220px]",
      gradient ? "bg-gradient-music" : "",
      className
    )}>
      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
        <div></div>
        <div>
          <h3 className="text-xl font-bold line-clamp-1">{title}</h3>
          <p className="text-sm text-music-muted mt-2 line-clamp-2">{description}</p>
        </div>
      </div>
      
      {!gradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0"></div>
      )}
      
      {!gradient && (
        <img 
          src={coverImage} 
          alt={title}
          className="absolute top-0 right-0 h-full w-full object-cover"
        />
      )}
      
      {gradient && (
        <img 
          src={coverImage} 
          alt={title}
          className="absolute -bottom-4 -right-4 h-32 w-32 transform rotate-12 shadow-xl"
          style={{ borderRadius: '4px' }}
        />
      )}
    </div>
  );
};

export default PlaylistCard;
