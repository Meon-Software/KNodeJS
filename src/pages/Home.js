import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
  <Container className="my-5 py-4">
    <Row className="justify-content-center">
      <Col md={10} lg={8} className="text-center">
        <div className="card-glass p-4 p-md-5 mb-5">
          <h1 className="display-4 mb-4">KNodeJS - Base de Conhecimento</h1>
          <p className="lead mb-5">
            Plataforma colaborativa para compartilhamento de conhecimento sobre Node.js, 
            onde desenvolvedores podem encontrar e contribuir com artigos técnicos, 
            tutoriais e melhores práticas.
          </p>
          
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/search" className="btn btn-node px-4 py-2 rounded-pill">
              Buscar Artigos
            </a>
            <a href="/team" className="btn btn-outline-node px-4 py-2 rounded-pill">
              Conheça a Equipe
            </a>
          </div>
        </div>
        
        <Row className="g-4">
          <Col md={6}>
            <div className="card-glass h-100 p-4">
              <h3 className="mb-3">Recursos Disponíveis</h3>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-node-green me-2">◆</span>
                  <span>Artigos técnicos sobre eventos assíncronos</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-node-green me-2">◆</span>
                  <span>Tutoriais de autenticação JWT</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-node-green me-2">◆</span>
                  <span>Melhores práticas de performance</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <span className="text-node-green me-2">◆</span>
                  <span>Padrões de arquitetura</span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="text-node-green me-2">◆</span>
                  <span>Integração com bancos de dados</span>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="card-glass h-100 p-4">
              <h3 className="mb-3">Contribua</h3>
              <p>
                Quer compartilhar seu conhecimento? Envie seus artigos e tutoriais para 
                serem publicados em nossa base de conhecimento.
              </p>
              <button className="btn btn-node mt-2 rounded-pill">
                Enviar Contribuição
              </button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Home;
