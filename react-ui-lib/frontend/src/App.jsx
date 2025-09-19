import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CatalogoPublico from './pages/CatalogoPublico';
import Catalogo from './pages/Catalogo';
import { LibroProvider } from './components/LibroContext';
import Navbar from './navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <LibroProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo-publico" element={<CatalogoPublico />} />
              <Route path="/catalogo" element={<Catalogo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LibroProvider>
  );
}

export default App;
