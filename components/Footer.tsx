
import React from 'react';
import { MeonCatLogoSvg } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-node-content-bg text-node-text-secondary py-8 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2 mb-4">
            <MeonCatLogoSvg className="w-8 h-8 mb-2 md:mb-0" color="#E0E0E0" />
            <a 
              href="https://github.com/Meon-Software" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-node-green transition-colors duration-200"
            >
              Um produto Meon Software
            </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} KNodeJS. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-1">
          Inspirado no design e comunidade Node.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;