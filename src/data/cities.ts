import { City } from '../types';

export const cities: City[] = [
  {
    id: 'nyc',
    name: 'New York',
    country: 'USA',
    videos: [
      {
        id: 'nyc-rain',
        videoId: '8Be1SHLBeq4',
        weather: 'Rain',
        thumbnail: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&q=80&w=1920',
        description: 'Walking in New York during heavy rain',
      },
      {
        id: 'nyc-normal',
        videoId: 'ZEcwuJ9Pr_c',
        weather: 'Clear',
        thumbnail: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1920',
        description: 'A normal walk through New York City',
      },
      {
        id: 'nyc-snow',
        videoId: 'F8MN0o6RS9o',
        weather: 'Snow',
        thumbnail: 'https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&q=80&w=1920',
        description: 'Snowfall in Times Square',
      },
      {
        id: 'nyc-night',
        videoId: 'cmldg92bIvc',
        weather: 'Snow',
        thumbnail: 'https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&q=80&w=1920',
        description: 'New York City Night Walking Tour ',
      },
    ],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    videos: [
      {
        id: 'kyoto-midnight-rain',
        videoId: 'qgfd-uWTVwg',
        weather: 'Rain',
        thumbnail: 'https://img.youtube.com/vi/qgfd-uWTVwg/hqdefault.jpg',
        description: 'Walk in Kyoto Midnight Rainstorm',
      },
      {
        id: 'kyoto-snow',
        videoId: 'ePQ035vDmD0',
        weather: 'Snow',
        thumbnail: 'https://img.youtube.com/vi/ePQ035vDmD0/hqdefault.jpg',
        description: 'Walking in the Snowfall Historical Alleys of Kyoto',
      },
      {
        id: 'kyoto-suburbs',
        videoId: 'OjHbS-_nncw',
        weather: 'Clear',
        thumbnail: 'https://img.youtube.com/vi/OjHbS-_nncw/hqdefault.jpg',
        description: 'Exploring the Suburbs of Kyoto, Japan',
      },
      {
        id: 'kyoto-day',
        videoId: 'QP11A3q7ZP4',
        weather: 'Day',
        thumbnail: 'https://img.youtube.com/vi/OjHbS-_nncw/hqdefault.jpg',
        description: 'Exploring the Day of Kyoto, Japan',
      },
    ],
  },
  {
    id: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    videos: [
      {
        id: 'toronto-financial-district',
        videoId: 'yNun-Rs-OU4',
        weather: 'Clear',
        thumbnail: 'https://img.youtube.com/vi/yNun-Rs-OU4/hqdefault.jpg',
        description: "Walking Toronto's Downtown Financial District",
      },
      {
        id: 'toronto-snow',
        videoId: 'Lhh8IzWzy9I',
        weather: 'Snow',
        thumbnail: 'https://img.youtube.com/vi/Lhh8IzWzy9I/hqdefault.jpg',
        description: 'Walking in the Snow in Toronto, Canada',
      },
      {
        id: 'toronto-Autumn',
        videoId: 'AJw3NeaFtXE',
        weather: 'Autumn',
        thumbnail: 'https://img.youtube.com/vi/Lhh8IzWzy9I/hqdefault.jpg',
        description: 'Walking in the Autumn in Toronto, Canada',
      },
      {
        id: 'toronto-night',
        videoId: 'dlRXqQJTAwI',
        weather: 'Night',
        thumbnail: 'https://img.youtube.com/vi/Lhh8IzWzy9I/hqdefault.jpg',
        description: 'Walking in the Night in Toronto, Canada',
      },


    ],
  },
];
