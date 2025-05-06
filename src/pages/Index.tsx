
import React, { useEffect } from 'react';
import ArtistHero from '@/components/ArtistHero';
import Header from '@/components/Header';
import BioSection from '@/components/BioSection';
import TracksSection from '@/components/TracksSection';
import ContactSection from '@/components/ContactSection';
import PhotosSection from '@/components/PhotosSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add('dark');
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <ArtistHero />
      <Header />
      <BioSection />
      <TracksSection />
      <ContactSection />
      <PhotosSection />
      <Footer />
    </div>
  );
};

export default Index;
