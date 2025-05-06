
import React, { useEffect, useRef } from 'react';
import InstagramFeed from './InstagramFeed';

const PhotosSection: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticles = async () => {
      try {
        // @ts-ignore
        await import('particles.js');
        
        // @ts-ignore
        if (window.particlesJS) {
          // @ts-ignore
          window.particlesJS(particlesRef.current.id, {
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              opacity: {
                value: 0.2,
                random: true
              },
              size: {
                value: 3,
                random: true
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
              }
            }
          });
        }
      } catch (error) {
        console.error("Failed to load particles.js for PhotosSection:", error);
      }
    };

    loadParticles();
  }, []);

  return (
    <section id="photos" className="section relative">
      {/* Background particle effect */}
      <div className="absolute inset-0 bg-black -z-10 overflow-hidden">
        <div ref={particlesRef} id="particles-photos" className="particles-bg h-full w-full"></div>
      </div>
      
      <h2 className="presskit-heading relative z-10">Artist's Photos & Feed</h2>
      
      <div className="flex justify-center relative z-10 mb-12">
        <a 
          href="#" 
          className="presskit-button"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://drive.google.com', '_blank');
          }}
        >
          DOWNLOAD PRESS KIT
        </a>
      </div>
      
      <h3 className="text-center text-xl mb-6 relative z-10">Latest Instagram Posts</h3>
      <div className="relative z-10">
        <InstagramFeed />
      </div>
    </section>
  );
};

export default PhotosSection;
