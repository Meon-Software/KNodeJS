
import React from 'react';
import { Link } from 'react-router-dom';
import { KNodeJSLogoSvg } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="text-center py-10">
      <div className="inline-block mb-8 animate-pulse">
        <KNodeJSLogoSvg size={120} />
      </div>
      <h1 className="text-5xl font-bold text-node-text-primary mb-6">
        Bem-vindo ao <span className="text-node-green">KNodeJS</span>
      </h1>
      <p className="text-xl text-node-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
        KNodeJS é sua plataforma centralizada para explorar e compartilhar conhecimento sobre o ecossistema Node.js. 
        Descubra artigos, tutoriais e dicas de especialistas para aprimorar suas habilidades de desenvolvimento.
      </p>
      <div className="space-x-4">
        <Link 
          to="/search" 
          className="bg-node-green text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
        >
          Explorar Artigos
        </Link>
        <Link 
          to="/team" 
          className="bg-gray-700 text-node-text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
        >
          Conheça a Equipe
        </Link>
      </div>
      <div className="mt-16 p-6 bg-node-content-bg rounded-lg shadow-xl max-w-2xl mx-auto border border-gray-700">
        <h2 className="text-2xl font-semibold text-node-green mb-4">Sobre o Projeto</h2>
        <p className="text-node-text-secondary text-left leading-relaxed">
          Este projeto foi idealizado como uma base de conhecimento colaborativa,
          inspirada na robustez e versatilidade do Node.js. Nosso objetivo é fornecer um
          espaço onde desenvolvedores de todos os níveis possam encontrar informações valiosas,
          aprender novas técnicas e contribuir para uma comunidade crescente.
          O KNodeJS utiliza React e Tailwind CSS para uma experiência de usuário moderna e responsiva,
          com um design "Dark Profissional NodeJS" para focar no conteúdo e proporcionar conforto visual.
        </p>
      </div>
    </div>
  );
};

export default HomePage;