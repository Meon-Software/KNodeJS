
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="block group">
      <div className="bg-node-content-bg shadow-lg rounded-lg p-6 h-full flex flex-col justify-between border border-gray-700 group-hover:border-node-green group-hover:shadow-xl transition-all duration-300 ease-in-out">
        <div>
          <h3 className="text-xl font-semibold text-node-green mb-2 group-hover:text-node-green-dark">{article.title}</h3>
          <p className="text-node-text-secondary mb-4 text-sm">{article.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {article.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-700 text-xs text-node-text-secondary rounded-full group-hover:bg-node-green group-hover:text-white transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
