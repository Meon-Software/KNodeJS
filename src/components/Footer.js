import React from 'react';
import MeonCat from '../assets/meon-cat';

const Footer = () => (
  <footer className="mt-auto">
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6 mb-3 mb-md-0">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <div style={{ width: '40px', height: '40px' }}>
                <svg viewBox="0 0 100 100">
                  <path 
                    fill="#8cc84b" 
                    d="M50,5 L95,30 L95,70 L50,95 L5,70 L5,30 Z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h5 className="text-node-green mb-0">KNodeJS</h5>
              <p className="mb-0 small">Base de conhecimento compartilhado sobre NodeJS</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 d-flex flex-column align-items-md-end">
          <div className="d-flex align-items-center">
            <span className="me-2">Um produto</span>
            <a 
              href="https://github.com/Meon-Software" 
              target="_blank" 
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center text-decoration-none"
            >
              <MeonCat width="30" height="30" className="me-1" />
              <span className="text-node-green">Meon Software</span>
            </a>
          </div>
          <p className="small mb-0 mt-2">© {new Date().getFullYear()} Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
