
import React, { useState, useEffect, useMemo } from 'react';
import SearchInput from '../components/SearchInput';
import ArticleCard from '../components/ArticleCard';
import { MOCK_ARTICLES } from '../constants';
import { Article } from '../types';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredArticles = useMemo((): Article[] => {
    if (!searchTerm.trim()) {
      return MOCK_ARTICLES;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return MOCK_ARTICLES.filter(article => 
      article.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      article.summary.toLowerCase().includes(lowerCaseSearchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))
    );
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="py-6">
      <h1 className="text-4xl font-bold text-node-text-primary mb-8 text-center">
        Buscar Artigos na Base de Conhecimento
      </h1>
      <div className="mb-10">
        <SearchInput value={searchTerm} onChange={handleSearchChange} />
      </div>
      
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-node-text-secondary text-xl mt-10">
          Nenhum artigo encontrado para "{searchTerm}". Tente uma busca diferente.
        </p>
      )}
    </div>
  );
};

export default SearchPage;