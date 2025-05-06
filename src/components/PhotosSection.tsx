
import React from 'react';

const PhotosSection: React.FC = () => {
  return (
    <section id="photos" className="section relative">
      {/* Background particle effect (simplified version) */}
      <div className="absolute inset-0 bg-black -z-10 overflow-hidden">
        <div className="particles-bg h-full w-full"></div>
      </div>
      
      <h2 className="presskit-heading relative z-10">Artist's Photos and Logo</h2>
      
      <div className="flex justify-center relative z-10">
        <a 
          href="#" 
          className="presskit-button"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://drive.google.com', '_blank');
          }}
        >
          CLICK TO ACCESS
        </a>
      </div>
    </section>
  );
};

export default PhotosSection;
