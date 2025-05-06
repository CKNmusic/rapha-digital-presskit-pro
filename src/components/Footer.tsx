
import React, { useEffect, useRef } from 'react';

const Footer: React.FC = () => {
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
                value: 30,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              opacity: {
                value: 0.1,
                random: true
              },
              size: {
                value: 2,
                random: true
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1
              },
              move: {
                enable: true,
                speed: 0.5,
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
        console.error("Failed to load particles.js for Footer:", error);
      }
    };

    loadParticles();
  }, []);

  return (
    <footer className="py-8 text-center text-sm text-gray-500 relative">
      {/* Particle effect in the background */}
      <div className="absolute inset-0 bg-black -z-10 overflow-hidden">
        <div ref={particlesRef} id="particles-footer" className="particles-footer h-full w-full"></div>
      </div>
      
      <div className="relative z-10">
        <p>© {new Date().getFullYear()} DJ Rapha. All Rights Reserved.</p>
        <p className="mt-1">Press Kit Digital Pro</p>
      </div>
    </footer>
  );
};

export default Footer;
