
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 relative">
      {/* Simple particle effect in the background */}
      <div className="absolute inset-0 bg-black -z-10 overflow-hidden">
        <div className="particles-footer h-full w-full"></div>
      </div>
      
      <div className="relative z-10">
        <p>© {new Date().getFullYear()} DJ Rapha. All Rights Reserved.</p>
        <p className="mt-1">Press Kit Digital Pro</p>
      </div>
    </footer>
  );
};

export default Footer;
