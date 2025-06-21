import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from '../components/TeamMember';

const Team = () => (
  <Container className="my-5">
    <h1 className="text-center mb-5">Nossa Equipe</h1>
    
    <Row className="justify-content-center">
      <TeamMember 
        name="Israel Ribeiro" 
        role="Desenvolvedor Full-Stack" 
        initials="IR" 
      />
      <TeamMember 
        name="Ana" 
        role="UX/UI Designer" 
        initials="A" 
      />
      <TeamMember 
        name="Vinicius Klein" 
        role="Especialista em Node.js" 
        initials="VK" 
      />
    </Row>
    
    <Row className="mt-5">
      <Col className="text-center">
        <h2>Sobre o Projeto</h2>
        <p className="lead">
          O KNodeJS nasceu da necessidade de centralizar o conhecimento sobre Node.js
          em língua portuguesa, com conteúdo de qualidade e acessível para todos os níveis.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Team;
