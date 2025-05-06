
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: 'BIO', href: '#bio' },
  { title: 'TRACKS & DJ SETS', href: '#tracks' },
  { title: 'CONTACT', href: '#contact' }
];

const Header: React.FC = () => {
  return (
    <header className="pt-16 pb-8 px-4 text-center">
      <h1 className="text-3xl md:text-4xl uppercase tracking-widest font-light mb-12">
        Press Kit Digital Pro
      </h1>
      
      <nav className="flex flex-col items-center space-y-4">
        {navLinks.map((link) => (
          <a 
            key={link.title}
            href={link.href}
            className="text-white hover:text-gray-300 transition-colors uppercase tracking-wider"
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
