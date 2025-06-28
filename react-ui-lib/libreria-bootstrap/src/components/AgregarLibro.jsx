import React, { useState } from 'react';

const FormularioAgregarLibro = ({ agregarLibro }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim() && autor.trim()) {
      agregarLibro({
        titulo,
        autor,
        imagenSrc: '/img/placeholder.jpg'
      });
      setTitulo('');
      setAutor('');
    }
  };

  return (
    <form onSubmit={manejarSubmit} className="mt-4">
      <h5>Agregar nuevo libro</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <button type="submit" className="btn btn-primary w-100">Agregar</button>
    </form>
  );
};

export default FormularioAgregarLibro;
