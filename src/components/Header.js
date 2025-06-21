import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../assets/logo';

const Header = () => (
  <Navbar bg="node-dark-3" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <Logo /> 
        <span className="ms-2">KNodeJS</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Início</Nav.Link>
          <Nav.Link href="/search">Buscar Artigos</Nav.Link>
          <Nav.Link href="/team">Equipe</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
