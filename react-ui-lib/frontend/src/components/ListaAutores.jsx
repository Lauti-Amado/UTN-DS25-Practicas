import React from "react";

const ListaAutores = ({ autores }) => {
  return (
    <div className="mt-4">
      <h5>Autores registrados</h5>
      {(!autores || autores.length === 0) ? (
        <p>No hay autores cargados.</p>
      ) : (
        <ul className="list-group">
          {autores.map((autor) => (
            <li key={autor.id} className="list-group-item">
              <strong>{autor.name}</strong> ({autor.books?.length || 0} libros)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaAutores;
