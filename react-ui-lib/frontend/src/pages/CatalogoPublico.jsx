import React, { useState } from 'react';
import LibroDestacado from '../components/LibroDestacado';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const CatalogoPublico = () => {
  const [busqueda, setBusqueda] = useState('');
  const { data, loading, error } = useFetch('http://localhost:3000/api/books/public');

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const libros = Array.isArray(data) ? data : data?.books || [];
  const filtrados = libros.filter((libro) =>
    libro.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>📚 Catálogo Público</h2>

      <div className="mb-3">
        <Link to="/" className="btn btn-outline-secondary me-2">🏠 Inicio</Link>
        <Link to="/login" className="btn btn-outline-success me-2">🔑 Login</Link>
        <Link to="/catalogo" className="btn btn-outline-warning">🔐 Catálogo Seguro</Link>
      </div>

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

export default CatalogoPublico;