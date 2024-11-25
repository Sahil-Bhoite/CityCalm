export interface City {
  id: string;
  name: string;
  country: string;
  videos: Array<{
    id: string;
    videoId: string;
    weather: string;
    thumbnail: string;
    description: string;
  }>;
}

export interface Settings {
  quality: 'hd1080' | 'hd720' | 'large' | 'default';
  autoplay: boolean;
}