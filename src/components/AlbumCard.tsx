
import React from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AlbumCardProps {
  title: string;
  artist: string;
  coverImage: string;
  className?: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  artist,
  coverImage,
  className
}) => {
  return (
    <div className={cn("music-card p-4 group", className)}>
      <div className="album-cover relative mb-3 group-hover:shadow-lg transition-all duration-300">
        <img 
          src={coverImage} 
          alt={`${title} by ${artist}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="w-12 h-12 bg-music-primary rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Play className="ml-1" fill="white" />
          </button>
        </div>
      </div>
      <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
      <p className="text-xs text-music-muted mt-1 line-clamp-1">By {artist}</p>
    </div>
  );
};

export default AlbumCard;
