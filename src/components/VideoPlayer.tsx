import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { City, Settings } from '../types';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface VideoPlayerProps {
  city: City;
  settings: Settings;
}

export default function VideoPlayer({ city, settings }: VideoPlayerProps) {
  const playerRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const randomVideo = React.useMemo(() => {
    const videos = city.videos;
    return videos[Math.floor(Math.random() * videos.length)];
  }, [city]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
  }, [randomVideo.videoId]);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: settings.autoplay ? 1 : 0,
      controls: 1,
      modestbranding: 1,
      loop: 1,
      playlist: randomVideo.videoId,
      quality: settings.quality,
      enablejsapi: 1,
      rel: 0,
      showinfo: 0,
      origin: window.location.origin,
      key: 'AIzaSyDHBd8cdDcxpVqpr_galfLCyZxIuEnjtDI', // Your API key
    },
  };

  const onReady = (event: any) => {
    if (!randomVideo.videoId) {
        setError('Invalid video ID on load.');
        return;
    }
    playerRef.current = event.target;
    setIsReady(true);
    setIsLoading(false);
   };
   
   console.log("Playing video ID:", randomVideo?.videoId);

 

   const onError = (error: any) => {
    console.error('YouTube Player Error:', error);
    setError('Video failed to load. Try refreshing or selecting another city.');
    setIsLoading(false);
  };



  const handleRetry = () => {
    if (!randomVideo.videoId) {
      setError('Video ID is invalid. Please check the video data.');
      return;
    }

    setIsLoading(true);
    setError(null);

    if (playerRef.current) {
      try {
        playerRef.current.loadVideoById(randomVideo.videoId);
        playerRef.current.playVideo();
      } catch (err) {
        console.error('Retry failed:', err);
        setError('Failed to reload video. Please refresh.');
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 z-10" />

      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-20">
          <div className="text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
            <p className="text-white/80">{error}</p>
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      ) : (
        <YouTube
          videoId={randomVideo.videoId}
          opts={opts}
          className="w-full h-full"
          onReady={onReady}
          onError={onError}
        />
      )}

      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="text-center space-y-4">
            <div className="animate-spin w-8 h-8 border-4 border-white/20 border-t-white/80 rounded-full" />
            <p className="animate-pulse text-white/80">Loading experience...</p>
          </div>
        </div>
      )}
    </div>
  );
}
