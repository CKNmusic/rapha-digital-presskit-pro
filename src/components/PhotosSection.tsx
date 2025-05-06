
import React from 'react';

const PhotosSection: React.FC = () => {
  return (
    <section id="photos" className="section">
      <h2 className="presskit-heading">Artist's Photos and Logo</h2>
      
      <div className="flex justify-center">
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
