
import React from 'react';
import { cn } from '@/lib/utils';

interface PlayingAnimationProps {
  isPlaying?: boolean;
  className?: string;
}

const PlayingAnimation: React.FC<PlayingAnimationProps> = ({ 
  isPlaying = true,
  className 
}) => {
  return (
    <div className={cn("flex items-end h-4", className)}>
      <div 
        className={cn(
          "playing-animation animate-pulse-light", 
          isPlaying ? "h-3/4" : "h-1/3"
        )}
        style={{ animationDelay: "0s" }}
      ></div>
      <div 
        className={cn(
          "playing-animation animate-pulse-light", 
          isPlaying ? "h-full" : "h-1/3"
        )}
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div 
        className={cn(
          "playing-animation animate-pulse-light", 
          isPlaying ? "h-2/4" : "h-1/3"
        )}
        style={{ animationDelay: "0.4s" }}
      ></div>
    </div>
  );
};

export default PlayingAnimation;
