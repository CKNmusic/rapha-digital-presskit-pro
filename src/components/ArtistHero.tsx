
import React from 'react';

const ArtistHero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
      
      <img 
        src="/lovable-uploads/937beea2-a34f-4d33-9608-e261c0210190.png" 
        alt="DJ Rapha" 
        className="w-full h-full object-cover"
      />
      
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
