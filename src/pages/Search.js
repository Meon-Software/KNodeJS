import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  const articles = [
    { id: 1, title: 'Introdução ao Node.js', excerpt: 'Aprenda os conceitos básicos do Node.js...', tags: ['iniciante', 'conceitos'] },
    { id: 2, title: 'Express.js: Rotas e Middlewares', excerpt: 'Entenda como criar rotas e usar middlewares...', tags: ['express', 'backend'] },
    { id: 3, title: 'Autenticação com JWT', excerpt: 'Implemente autenticação segura usando JSON Web Tokens...', tags: ['segurança', 'autenticação'] },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const results = articles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    setSearchResults(results);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="card-glass p-4 mb-5"> {/* Este div estava faltando fechar */}
            <h1 className="text-center mb-4">Buscar Artigos</h1>
            
            <Form onSubmit={handleSearch} className="mb-5">
              <SearchBar query={query} setQuery={setQuery} onSubmit={handleSearch} />
            </Form>
            
            {searchResults.length > 0 ? (
              <div>
                <h2 className="mb-4">Resultados para "{query}"</h2>
                {searchResults.map(article => (
                  <Card key={article.id} className="mb-3 bg-node-dark-2 border-node-green">
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text>{article.excerpt}</Card.Text>
                      <div>
                        {article.tags.map((tag, index) => (
                          <span key={index} className="badge bg-node-green me-2">{tag}</span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            ) : query ? (
              <p className="text-center">Nenhum resultado encontrado para "{query}"</p>
            ) : (
              <p className="text-center">Digite um termo para buscar artigos</p>
            )}
          </div> {/* Fechamento adicionado aqui */}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
