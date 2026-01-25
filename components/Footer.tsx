import React from 'react';
import { Link } from 'react-router-dom';
import { Infinity, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-text-main text-white">
              <Infinity size={14} />
            </div>
            <span className="text-lg font-bold tracking-tight text-text-main">Divines_Code</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-text-sub">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <div className="flex gap-4">
               <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
               <a href="#" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
               <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
          
          <p className="text-sm text-text-sub text-center md:text-right">
            © 2024 Divines_Code. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;