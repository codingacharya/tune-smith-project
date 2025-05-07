
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MusicPlayerProps {
  className?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(80);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cn(
      "flex items-center justify-between p-4 border-t border-music-card bg-black",
      className
    )}>
      {/* Currently playing */}
      <div className="flex items-center gap-4 w-1/4">
        <div className="w-14 h-14 bg-music-card rounded overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
            alt="Album cover" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium">Midnight Serenade</h4>
          <p className="text-xs text-music-muted">Luna Ray</p>
        </div>
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center gap-2 w-2/4">
        <div className="flex items-center gap-4">
          <button className="text-music-muted hover:text-music-text transition-colors">
            <SkipBack size={20} />
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
          </button>
          <button className="text-music-muted hover:text-music-text transition-colors">
            <SkipForward size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-music-muted">1:21</span>
          <div className="w-full bg-secondary rounded-full h-1 overflow-hidden">
            <div 
              className="bg-music-primary h-full rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-music-muted">4:30</span>
        </div>
      </div>

      {/* Volume control */}
      <div className="flex items-center gap-2 w-1/4 justify-end">
        <Volume2 size={18} className="text-music-muted" />
        <div className="w-24 bg-secondary rounded-full h-1 overflow-hidden">
          <div 
            className="bg-music-muted h-full rounded-full"
            style={{ width: `${volume}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
