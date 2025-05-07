
import { useState } from 'react';
import { Home, Search, Music2, ListMusic, Book, Menu, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ icon: Icon, label, active, onClick }: SidebarLinkProps) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-all",
        active ? "bg-music-primary/20 text-music-primary" : "text-music-text hover:bg-secondary/80"
      )}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );
};

interface MusicSidebarProps {
  className?: string;
}

const MusicSidebar = ({ className }: MusicSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  
  return (
    <div className={cn(
      "flex flex-col h-full bg-black border-r border-music-card transition-all duration-300",
      isCollapsed ? "w-[80px]" : "w-[240px]",
      className
    )}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h1 className="text-xl font-bold bg-gradient-to-r from-music-primary to-music-light bg-clip-text text-transparent">TuneSmith</h1>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full hover:bg-secondary/80"
        >
          {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex flex-col gap-1 p-2">
        <SidebarLink 
          icon={Home} 
          label="Home" 
          active={activeItem === 'Home'}
          onClick={() => setActiveItem('Home')} 
        />
        <SidebarLink 
          icon={Search} 
          label="Search" 
          active={activeItem === 'Search'}
          onClick={() => setActiveItem('Search')} 
        />
        <SidebarLink 
          icon={Music2} 
          label="Your Library" 
          active={activeItem === 'Your Library'}
          onClick={() => setActiveItem('Your Library')} 
        />
      </div>
      
      <div className="mt-6 border-t border-secondary pt-4 px-2">
        <div className={cn("px-4 py-2", isCollapsed ? "hidden" : "block")}>
          <h3 className="text-sm font-medium text-music-muted mb-2">PLAYLISTS</h3>
        </div>
        <SidebarLink 
          icon={ListMusic} 
          label="Create Playlist" 
          active={activeItem === 'Create Playlist'}
          onClick={() => setActiveItem('Create Playlist')} 
        />
        <SidebarLink 
          icon={Book} 
          label="Your Episodes" 
          active={activeItem === 'Your Episodes'}
          onClick={() => setActiveItem('Your Episodes')} 
        />
      </div>
      
      {!isCollapsed && (
        <div className="mt-4 px-4">
          <div className="flex flex-col gap-2">
            <button className="text-sm text-music-muted hover:text-music-text text-left">Hip Hop Mix</button>
            <button className="text-sm text-music-muted hover:text-music-text text-left">Discover Weekly</button>
            <button className="text-sm text-music-muted hover:text-music-text text-left">Chill Vibes</button>
            <button className="text-sm text-music-muted hover:text-music-text text-left">Workout Playlist</button>
          </div>
        </div>
      )}
      
      <div className="mt-auto p-4">
        {!isCollapsed && (
          <div className="p-4 rounded-lg bg-music-primary/10">
            <p className="text-sm font-medium">Upgrade to Premium</p>
            <p className="text-xs text-music-muted mt-1">Enjoy ad-free music, offline listening, and more</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicSidebar;
