import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import { Menu } from 'lucide-react';
import { cities } from './data/cities';
import { City, Settings } from './types';

export default function App() {
  const [selectedCity, setSelectedCity] = useState<City | null>(cities[0] || null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [settings, setSettings] = useState<Settings>({
    quality: 'hd1080',
    autoplay: true,
  });

  // Effect to toggle fullscreen when sidebar opens or closes
  useEffect(() => {
    if (isSidebarOpen) {
      // Exit fullscreen if the sidebar is opened
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((err) => {
          console.error('Failed to exit fullscreen:', err);
        });
      }
    } else {
      // Enter fullscreen if the sidebar is closed
      document.documentElement
        .requestFullscreen()
        .catch((err) => {
          console.error('Failed to enter fullscreen:', err);
        });
    }
  }, [isSidebarOpen]); // Runs when `isSidebarOpen` changes

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {selectedCity && <VideoPlayer city={selectedCity} settings={settings} />}

      {/* Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={`fixed top-4 left-4 p-3 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <Sidebar
        cities={cities}
        selectedCity={selectedCity}
        settings={settings}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onCitySelect={setSelectedCity}
        onSettingsChange={setSettings}
      />
    </div>
  );
}
