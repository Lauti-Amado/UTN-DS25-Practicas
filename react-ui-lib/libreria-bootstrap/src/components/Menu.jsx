import React, { useContext } from 'react';
import { LibroContext } from './LibroContext';
import LibroDestacado from './LibroDestacado';
import Buscador from './Buscador';
import FormularioAgregarLibro from './AgregarLibro';
import FormularioAgregarAutor from './AgregarAutor';
import ListaAutores from './ListaAutores';
import Spinner from './Spinner';
import useFetchAutores from '../hooks/useFetchAutores';

const Menu = () => {
  const { libros, cargando } = useContext(LibroContext);
  const [busqueda, setBusqueda] = React.useState('');
  const { autores, cargando: cargandoAutores, refetch } = useFetchAutores();

  const librosFiltrados = libros.filter((libro) =>
    libro.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <Spinner />;

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
          <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
          <FormularioAgregarAutor onAutorAgregado={refetch} />
          <FormularioAgregarLibro autores={autores} cargandoAutores={cargandoAutores} />
          <ListaAutores autores={autores} />
        </div>

        <div className="col-md-9">
          {cargando ? (
            <p>Cargando libros...</p>
          ) : (
            <div className="row">
              {Array.isArray(librosFiltrados) &&
                librosFiltrados.map((libro) => {
                console.log("📖 Libro en render:", libro);
                return (
                  <div key={libro.id} className="col-sm-6 col-lg-4 mb-4">
                    <LibroDestacado {...libro} />
                  </div>
                );
              })}
              {librosFiltrados.length === 0 && (
                <p className="text-center">No hay libros para mostrar.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
