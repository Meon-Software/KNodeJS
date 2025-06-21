
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import TeamPage from './pages/TeamPage';
import ArticleDetailPage from './pages/ArticleDetailPage'; // Importa a nova página
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-node-dark-bg text-node-text-primary">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/article/:articleId" element={<ArticleDetailPage />} /> {/* Nova rota */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
