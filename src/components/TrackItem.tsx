
import { Play, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import PlayingAnimation from './PlayingAnimation';

interface TrackItemProps {
  title: string;
  artist: string;
  albumName?: string;
  duration: string;
  coverImage?: string;
  isPlaying?: boolean;
  isActive?: boolean;
  onPlay?: () => void;
  className?: string;
}

const TrackItem = ({
  title,
  artist,
  albumName,
  duration,
  coverImage,
  isPlaying = false,
  isActive = false,
  onPlay,
  className
}: TrackItemProps) => {
  return (
    <div 
      className={cn(
        "group grid grid-cols-[auto,1fr,auto] md:grid-cols-[auto,1fr,1fr,auto] items-center gap-4 p-2 rounded-md",
        isActive ? "bg-white/10" : "hover:bg-white/5",
        className
      )}
    >
      <div className="w-10 text-center flex justify-center">
        {isPlaying ? (
          <PlayingAnimation />
        ) : (
          <>
            <span className="group-hover:hidden inline">{isActive ? "▶" : "•"}</span>
            <button 
              onClick={onPlay}
              className="hidden group-hover:flex items-center justify-center"
            >
              <Play size={16} fill={isActive ? "white" : undefined} />
            </button>
          </>
        )}
      </div>
      
      <div className="flex items-center gap-3">
        {coverImage ? (
          <div className="w-10 h-10 overflow-hidden rounded bg-music-card">
            <img 
              src={coverImage} 
              alt={`${title} by ${artist}`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-10 h-10 bg-music-card rounded flex items-center justify-center">
            <Music size={20} className="text-music-muted" />
          </div>
        )}
        
        <div>
          <p className={cn("text-sm font-medium line-clamp-1", isActive ? "text-music-primary" : "")}>
            {title}
          </p>
          <p className="text-xs text-music-muted line-clamp-1">
            {artist}
          </p>
        </div>
      </div>
      
      <div className="hidden md:block">
        <p className="text-sm text-music-muted line-clamp-1">{albumName}</p>
      </div>
      
      <div>
        <span className="text-sm text-music-muted">{duration}</span>
      </div>
    </div>
  );
};

export default TrackItem;
