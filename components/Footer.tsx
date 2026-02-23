import React from 'react';
import { Link } from 'react-router-dom';
import { Infinity, Instagram, Linkedin } from 'lucide-react';

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
              <a href="https://www.instagram.com/divine_code_41" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/company/110118328" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <p className="text-sm text-text-sub text-center md:text-right leading-relaxed">
            <span className="inline-block">© 2026 Created and Maintained by</span>{' '}
            <span className="inline-block">
              <a href="https://mahendranagpure.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors whitespace-nowrap">Mahendra Nagpure</a>
              {' & '}
              <a href="https://jayeshbpatil.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors whitespace-nowrap">Jayesh Patil</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;