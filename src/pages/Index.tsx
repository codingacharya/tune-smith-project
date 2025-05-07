
import React from 'react';
import Header from '@/components/Header';
import MusicSidebar from '@/components/MusicSidebar';
import MusicPlayer from '@/components/MusicPlayer';
import FeaturedSection from '@/components/FeaturedSection';
import AlbumCard from '@/components/AlbumCard';
import PlaylistCard from '@/components/PlaylistCard';
import TrackItem from '@/components/TrackItem';
import { Music } from 'lucide-react';

const Index = () => {
  // Mock data for playlists
  const playlists = [
    { 
      id: 1, 
      title: "Today's Top Hits", 
      description: "Harry Styles is on top of the Hottest 50!", 
      coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    { 
      id: 2, 
      title: "Chill Lofi Mix", 
      description: "Relax and study with these lofi beats", 
      coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      gradient: true
    },
    { 
      id: 3, 
      title: "Workout Energy", 
      description: "Keep the motivation high with these tracks", 
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    { 
      id: 4, 
      title: "Indie Discoveries", 
      description: "Fresh indie music you need to hear", 
      coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
  ];
  
  // Mock data for albums
  const albums = [
    { 
      id: 1, 
      title: "Midnight Melodies", 
      artist: "Luna Ray", 
      coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    { 
      id: 2, 
      title: "Electric Dreams", 
      artist: "Neon Pulse", 
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    { 
      id: 3, 
      title: "Echoes of Tomorrow", 
      artist: "Sky Nomad", 
      coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    { 
      id: 4, 
      title: "Urban Reflections", 
      artist: "City Lights", 
      coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    { 
      id: 5, 
      title: "Beyond Horizons", 
      artist: "Stellar Drift", 
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
  ];
  
  // Mock data for tracks
  const tracks = [
    {
      id: 1,
      title: "Electric Wave",
      artist: "Cosmic Drift",
      albumName: "Midnight Melodies",
      duration: "3:45",
      coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      isActive: true,
      isPlaying: true
    },
    {
      id: 2,
      title: "Dreamy Nights",
      artist: "Luna Ray",
      albumName: "Electric Dreams",
      duration: "4:12",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      id: 3,
      title: "City Lights",
      artist: "Urban Echo",
      albumName: "Echoes of Tomorrow",
      duration: "3:21",
      coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 4,
      title: "Reflections",
      artist: "Aqua Soul",
      albumName: "Urban Reflections",
      duration: "5:07",
      coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      id: 5,
      title: "Cosmic Journey",
      artist: "Stellar Drift",
      albumName: "Beyond Horizons",
      duration: "4:30",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    }
  ];
  
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <MusicSidebar />
        
        <main className="flex-1 flex flex-col overflow-hidden">
          <Header username="TuneSmith User" />
          
          <div className="flex-1 overflow-y-auto px-6 py-4 animate-fade-in">
            <FeaturedSection title="Good evening" subtitle="Discover new music">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {playlists.map((playlist) => (
                  <PlaylistCard 
                    key={playlist.id}
                    title={playlist.title}
                    description={playlist.description}
                    coverImage={playlist.coverImage}
                    gradient={playlist.gradient}
                  />
                ))}
              </div>
            </FeaturedSection>
            
            <FeaturedSection title="Made For You" subtitle="Based on your recent listening">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {albums.map((album) => (
                  <AlbumCard 
                    key={album.id}
                    title={album.title}
                    artist={album.artist}
                    coverImage={album.coverImage}
                  />
                ))}
              </div>
            </FeaturedSection>
            
            <FeaturedSection title="Recently Played">
              <div className="bg-music-card/40 rounded-lg overflow-hidden">
                {tracks.map((track) => (
                  <TrackItem 
                    key={track.id}
                    title={track.title}
                    artist={track.artist}
                    albumName={track.albumName}
                    duration={track.duration}
                    coverImage={track.coverImage}
                    isActive={track.isActive}
                    isPlaying={track.isPlaying}
                  />
                ))}
              </div>
            </FeaturedSection>
          </div>
        </main>
      </div>
      
      <MusicPlayer />
    </div>
  );
};

export default Index;
