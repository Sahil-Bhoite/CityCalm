import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Initialize YouTube IFrame API
window.onYouTubeIframeAPIReady = () => {
  console.log('YouTube IFrame API Ready');
};

// Load YouTube IFrame API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

// Add global type for YouTube API callback
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);