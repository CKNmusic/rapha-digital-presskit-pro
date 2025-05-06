
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} DJ Rapha. All Rights Reserved.</p>
      <p className="mt-1">Press Kit Digital Pro</p>
    </footer>
  );
};

export default Footer;
