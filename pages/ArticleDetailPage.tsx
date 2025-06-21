import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';
import { Article } from '../types';
import NotFoundPage from './NotFoundPage';

const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  const article = MOCK_ARTICLES.find(art => art.id === articleId);

  if (!article) {
    return <NotFoundPage />; // Ou uma mensagem específica de artigo não encontrado
  }

  // Simplesmente divide o conteúdo por parágrafos para uma melhor formatação
  const paragraphs = article.content?.split('\\n\\n');

  return (
    <div className="py-8 px-4 md:px-0">
      <button
        onClick={() => navigate(-1)} // Volta para a página anterior
        className="mb-8 inline-flex items-center text-node-green hover:text-node-green-dark transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Voltar
      </button>

      <article className="bg-node-content-bg shadow-xl rounded-lg p-6 md:p-10 border border-gray-700">
        <header className="mb-6 pb-6 border-b border-gray-600">
          <h1 className="text-4xl md:text-5xl font-bold text-node-green mb-3">{article.title}</h1>
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-700 text-xs text-node-text-secondary rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </header>
        
        <div className="prose prose-invert max-w-none text-node-text-primary leading-relaxed">
          {paragraphs && paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
          {!article.content && <p>{article.summary}</p>} 
        </div>

        {/* Exemplo de rodapé do artigo, se necessário */}
        {/* <footer className="mt-8 pt-6 border-t border-gray-600">
          <p className="text-sm text-node-text-secondary">Publicado em: [Data]</p>
        </footer> */}
      </article>

      <div className="mt-12 text-center">
        <Link 
          to="/search" 
          className="bg-node-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Ver outros artigos
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetailPage;

