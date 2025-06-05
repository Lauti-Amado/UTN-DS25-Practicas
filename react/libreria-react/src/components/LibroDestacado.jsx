import React from 'react';

const LibroDestacado = ({ titulo, autor, imagenSrc }) => {
  return (
    <div>
      <img src={imagenSrc} alt={`Tapa de ${titulo}`} />
      <h3>{titulo}</h3>
      <h4>{autor}</h4>
    </div>
  );
};

export default LibroDestacado;
