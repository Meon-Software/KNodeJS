
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEMS, KNodeJSLogoSvg } from '../constants';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-node-content-bg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-node-green hover:opacity-80 transition-opacity">
            <KNodeJSLogoSvg size={48} />
            <span className="text-2xl font-bold text-node-text-primary">KNodeJS</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {NAV_ITEMS.map((item: NavItem) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
                    isActive 
                      ? 'bg-node-green text-white' 
                      : 'text-node-text-secondary hover:bg-gray-700 hover:text-node-text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-node-text-secondary hover:text-node-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-node-green p-2 rounded-md"
              aria-label="Abrir menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-node-content-bg border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item: NavItem) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out ${
                    isActive 
                      ? 'bg-node-green text-white' 
                      : 'text-node-text-secondary hover:bg-gray-700 hover:text-node-text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;