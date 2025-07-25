import React, { useContext, useState } from 'react';
import LibroDestacado from '../components/LibroDestacado';
import { LibroContext } from '../components/LibroContext';

const Catalogo = () => {
  const { libros } = useContext(LibroContext);
  const [busqueda, setBusqueda] = useState('');

  const filtrados = libros.filter(libro =>
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
        {filtrados.map((libro) => (
          <div key={libro.id} className="col-md-4">
            <LibroDestacado {...libro} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
