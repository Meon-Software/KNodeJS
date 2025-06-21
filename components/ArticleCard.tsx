
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-node-content-bg shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-700 hover:border-node-green">
      <h3 className="text-xl font-semibold text-node-green mb-2">{article.title}</h3>
      <p className="text-node-text-secondary mb-4 text-sm">{article.summary}</p>
      <div className="flex flex-wrap gap-2">
        {article.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-700 text-xs text-node-text-secondary rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;