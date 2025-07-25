import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import { LibroProvider } from './components/LibroContext';

function App() {
  return (
    <LibroProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </Router>
    </LibroProvider>
  );
}

export default App;
