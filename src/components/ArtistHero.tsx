
import React from 'react';
import ParticleBackground from './ParticleBackground';

const ArtistHero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Particles background */}
      <ParticleBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
      
      {/* Artist image */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="relative w-full h-full md:w-auto md:h-auto md:max-h-[85vh] overflow-hidden">
          <img 
            src="/lovable-uploads/244ddc5d-3489-4f0f-bb70-4c849ac6ee88.png" 
            alt="DJ Rapha" 
            className="object-cover md:object-contain h-full w-full"
          />
        </div>
      </div>
      
      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 w-full text-center pb-20 z-20">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest text-white mb-2">
          DJ RAPHA
        </h1>
        <p className="text-lg text-gray-300 tracking-wider">
          Open Format DJ • Rio de Janeiro, BR
        </p>
      </div>
    </section>
  );
};

export default ArtistHero;
