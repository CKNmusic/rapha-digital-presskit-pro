
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticlesJS = async () => {
      try {
        // @ts-ignore - particles.js doesn't have TypeScript definitions
        await import('particles.js');
        
        // @ts-ignore - access the global particlesJS function
        if (window.particlesJS) {
          // @ts-ignore
          window.particlesJS.load(
            'particles-js',
            '/particles.js-config.json',
            function() {
              console.log('particles.js loaded - callback');
            }
          );
        } else {
          console.error("particlesJS is not available on window");
        }
      } catch (error) {
        console.error("Failed to load particles.js:", error);
      }
    };

    loadParticlesJS();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div 
      ref={particlesRef}
      id="particles-js" 
      className="absolute inset-0 bg-black z-0"
    />
  );
};

export default ParticleBackground;
