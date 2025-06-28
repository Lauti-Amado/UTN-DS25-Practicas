import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import AgregarLibro from './components/AgregarLibro';

function App() {
  const [catalogo, setCatalogo] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home catalogo={catalogo} />} />
        <Route path="/catalogo" element={<Catalogo catalogo={catalogo} />} />
        <Route path="/agregar" element={<AgregarLibro setCatalogo={setCatalogo} />} />
      </Routes>
    </Router>
  );
}

export default App;
