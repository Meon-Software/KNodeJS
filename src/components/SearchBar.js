// src/components/SearchBar.js
import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const SearchBar = ({ query, setQuery, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar artigos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-pill"
        />
        <Button 
          variant="outline-node" 
          type="submit"
          className="rounded-pill ms-2"
        >
          Buscar
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
