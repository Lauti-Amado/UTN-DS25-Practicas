import React, { useState } from 'react';
import LibroDestacado from '../components/LibroDestacado';

const Catalogo = ({ catalogo }) => {
  const [busqueda, setBusqueda] = useState('');

  const filtrados = catalogo.filter(libro =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar por título..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div className="row">
        {filtrados.map((libro, i) => (
          <div key={i} className="col-md-4">
            <LibroDestacado {...libro} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
