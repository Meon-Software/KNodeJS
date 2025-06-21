
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-8xl font-bold text-node-green mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-node-text-primary mb-6">Página Não Encontrada</h2>
      <p className="text-node-text-secondary mb-8">
        Oops! A página que você está procurando não existe ou foi movida.
      </p>
      <Link 
        to="/" 
        className="bg-node-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors duration-200"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;