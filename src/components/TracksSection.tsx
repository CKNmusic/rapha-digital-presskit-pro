
import React from 'react';
import { Instagram, Music, Youtube } from 'lucide-react';

interface PlatformLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const platforms: PlatformLink[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com',
    icon: Music
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: Instagram
  },
  {
    name: 'Youtube',
    url: 'https://youtube.com',
    icon: Youtube
  },
];

const TracksSection: React.FC = () => {
  return (
    <section id="tracks" className="section">
      <h2 className="presskit-heading">Tracks & DJ Sets</h2>
      
      <div className="flex justify-center flex-wrap gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="presskit-button inline-flex items-center"
          >
            <platform.icon className="mr-2 h-4 w-4" />
            {platform.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default TracksSection;
