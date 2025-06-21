
import React from 'react';
import { MeonCatIcon } from '../constants'; // Importa o novo ícone

const Footer: React.FC = () => {
  return (
    <footer className="bg-node-content-bg text-node-text-secondary py-8 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <a 
          href="https://github.com/Meon-Software" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex flex-col md:flex-row justify-center items-center group text-node-text-secondary hover:text-node-green transition-colors duration-200 mb-4"
        >
          <MeonCatIcon className="w-8 h-8 mb-2 md:mb-0 md:mr-2 text-[#E0E0E0] group-hover:text-node-green transition-colors" />
          <span>Um produto Meon Software</span>
        </a>
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

