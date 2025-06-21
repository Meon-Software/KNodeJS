import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Team from './pages/Team';
import HexagonBackground from './components/HexagonBackground'; // Add this
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <HexagonBackground /> {/* Add this component */}
        <Header />
        <main className="flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
