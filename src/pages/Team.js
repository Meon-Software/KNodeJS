import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamMember from '../components/TeamMember'; // Caminho correto

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
    
    {/* ... */}
  </Container>
);

export default Team;
