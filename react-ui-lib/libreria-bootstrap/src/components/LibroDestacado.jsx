import React from 'react';

const LibroDestacado = ({ title, author, imageUrl, price }) => {
  if (typeof title !== 'string' || typeof author !== 'string') {
    console.warn('❌ Datos inválidos recibidos en LibroDestacado:', {
      title,
      author,
      imageUrl,
      price,
    });
    return null;
  }

  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={`Tapa de ${title}`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{author}</p>
        <p className="card-text text-muted">${price}</p>
      </div>
    </div>
  );
};

export default LibroDestacado;
