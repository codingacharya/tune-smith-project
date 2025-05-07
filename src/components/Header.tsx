
import React from 'react';
import { ChevronLeft, ChevronRight, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  username?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ username = "Guest", className }) => {
  return (
    <header className={cn("sticky top-0 z-10 flex items-center justify-between p-4 bg-opacity-80 backdrop-filter backdrop-blur-sm", className)}>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/60">
          <ChevronLeft size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/60">
          <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-black/30">
          <Bell size={18} />
        </button>
        <button className="flex items-center gap-2 py-1 px-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors">
          <div className="w-6 h-6 rounded-full bg-music-primary/30 flex items-center justify-center">
            <User size={14} />
          </div>
          <span className="text-sm font-medium">{username}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
