import React from 'react';

const LibroDestacado = ({ title, author, imageUrl, price }) => {
  const authorName = author?.name || "Autor desconocido";

  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={`Tapa de ${title}`}
        onError={(e) => { e.target.src = "/img/placeholder.jpg"; }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{authorName}</p>
        <p className="card-text text-muted">${price}</p>
      </div>
    </div>
  );
};

export default LibroDestacado;
