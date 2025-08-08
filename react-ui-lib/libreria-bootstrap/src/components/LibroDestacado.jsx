import React from 'react';

const LibroDestacado = ({ titulo, autor, imagenSrc }) => {
  if (
    typeof titulo !== 'string' ||
    typeof autor !== 'string' ||
    typeof imagenSrc !== 'string'
  ) {
    console.warn('❌ Datos inválidos recibidos en LibroDestacado:', {
      titulo,
      autor,
      imagenSrc
    });
    return null;
  }

  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img src={imagenSrc} className="card-img-top" alt={`Tapa de ${titulo}`} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{autor}</p>
      </div>
    </div>
  );
};

export default LibroDestacado;
