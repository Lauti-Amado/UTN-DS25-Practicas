import React, { useState } from 'react';
import LibroDestacado from './LibroDestacado';
import Buscador from './Buscador';
import FormularioAgregarLibro from './AgregarLibro';

const Menu = () => {
  const [libros, setLibros] = useState([
    { id: 1, titulo: 'Título 1', autor: 'Autor 1' },
    { id: 2, titulo: 'Título 2', autor: 'Autor 2' },
    { id: 3, titulo: 'Título 3', autor: 'Autor 3' },
    { id: 4, titulo: 'Título 4', autor: 'Autor 4' },
  ]);

  const [busqueda, setBusqueda] = useState('');

  const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, { ...nuevoLibro, id: libros.length + 1 }]);
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group mb-4">
            <a href="#" className="list-group-item list-group-item-action active">Inicio</a>
            <a href="#" className="list-group-item list-group-item-action">Ficción</a>
            <a href="#" className="list-group-item list-group-item-action">No Ficción</a>
            <a href="#" className="list-group-item list-group-item-action">Fantasía</a>
            <a href="#" className="list-group-item list-group-item-action">Ciencia</a>
            <a href="#" className="list-group-item list-group-item-action">Registración</a>
            <a href="#" className="list-group-item list-group-item-action">Contacto</a>
          </div>

          <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
          <FormularioAgregarLibro agregarLibro={agregarLibro} />
        </div>

        <div className="col-md-9">
          <div className="row">
            {librosFiltrados.map((libro) => (
              <div key={libro.id} className="col-sm-6 col-lg-4 mb-4">
                <LibroDestacado {...libro} />
              </div>
            ))}
            {librosFiltrados.length === 0 && (
              <p className="text-center">No hay libros para mostrar.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
