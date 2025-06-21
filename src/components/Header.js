import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../assets/logo';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Atualizar link ativo baseado na rota
    const path = window.location.pathname;
    if (path === '/') setActiveLink('home');
    else if (path === '/search') setActiveLink('search');
    else if (path === '/team') setActiveLink('team');

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      bg={scrolled ? "node-dark-3" : "node-dark-3"} 
      variant="dark" 
      expand="lg" 
      fixed="top"
      className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Logo /> 
          <span className="ms-2 fw-bold">KNodeJS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="/" 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => setActiveLink('home')}
            >
              Início
            </Nav.Link>
            <Nav.Link 
              href="/search" 
              className={activeLink === 'search' ? 'active' : ''}
              onClick={() => setActiveLink('search')}
            >
              Buscar Artigos
            </Nav.Link>
            <Nav.Link 
              href="/team" 
              className={activeLink === 'team' ? 'active' : ''}
              onClick={() => setActiveLink('team')}
            >
              Equipe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
