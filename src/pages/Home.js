import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col md={8} className="text-center">
        <h1 className="mb-4">KNodeJS - Base de Conhecimento</h1>
        <p className="lead">
          Plataforma colaborativa para compartilhamento de conhecimento sobre Node.js, 
          onde desenvolvedores podem encontrar e contribuir com artigos técnicos, 
          tutoriais e melhores práticas.
        </p>
        
        <Card bg="dark" text="white" className="mt-5">
          <Card.Body>
            <Card.Title>Explore Nossos Recursos</Card.Title>
            <Card.Text>
              - Artigos técnicos sobre eventos assíncronos<br />
              - Tutoriais de autenticação JWT<br />
              - Melhores práticas de performance<br />
              - Padrões de arquitetura<br />
              - Integração com bancos de dados
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
