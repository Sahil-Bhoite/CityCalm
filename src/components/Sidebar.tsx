import React from 'react';
import { Settings, City } from '../types';
import { MonitorPlay, PlayCircle, X } from 'lucide-react';

interface SidebarProps {
  cities: City[];
  selectedCity: City | null;
  settings: Settings;
  isOpen: boolean;
  onClose: () => void;
  onCitySelect: (city: City) => void;
  onSettingsChange: (settings: Settings) => void;
}

export default function Sidebar({
  cities,
  selectedCity,
  settings,
  isOpen,
  onClose,
  onCitySelect,
  onSettingsChange,
}: SidebarProps) {
  return (
    <div 
      className={`fixed top-0 h-full w-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md text-white p-6 overflow-y-auto transition-transform duration-300 shadow-2xl border-r border-white/10 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            CityCalm
          </h1>
          <p className="text-sm text-gray-300">Virtual walking experiences</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Cities</h2>
            <select
              className="w-full bg-white/10 rounded-lg p-2 outline-none border border-white/20 focus:border-white/40 transition-colors backdrop-blur-sm"
              value={selectedCity?.id || ''}
              onChange={(e) => {
                const city = cities.find(c => c.id === e.target.value);
                if (city) onCitySelect(city);
              }}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}, {city.country}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center mb-2">
                  <MonitorPlay className="w-4 h-4 mr-2" />
                  <span>Quality</span>
                </label>
                <select
                  value={settings.quality}
                  onChange={(e) =>
                    onSettingsChange({
                      ...settings,
                      quality: e.target.value as Settings['quality'],
                    })
                  }
                  className="w-full bg-white/10 rounded-lg p-2 outline-none border border-white/20 focus:border-white/40 transition-colors backdrop-blur-sm"
                >
                  <option value="hd1080">1080p</option>
                  <option value="hd720">720p</option>
                  <option value="large">480p</option>
                  <option value="default">Auto</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoplay}
                    onChange={(e) =>
                      onSettingsChange({
                        ...settings,
                        autoplay: e.target.checked,
                      })
                    }
                    className="rounded bg-white/10 border-white/20 text-white/80 focus:ring-0 cursor-pointer"
                  />
                  <PlayCircle className="w-4 h-4" />
                  <span>Autoplay</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}