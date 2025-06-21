import React from 'react';
import MeonCat from '../assets/meon-cat';

const Footer = () => (
  <footer className="py-4 mt-auto">
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0">
          <p className="mb-0">KNodeJS &copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-2">Um produto</span>
          <a 
            href="https://github.com/Meon-Software" 
            target="_blank" 
            rel="noopener noreferrer"
            className="d-inline-flex align-items-center text-decoration-none text-node-green"
          >
            <MeonCat width="30" height="30" className="me-1" />
            <span>Meon Software</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
