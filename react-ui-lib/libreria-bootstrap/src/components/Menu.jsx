import React from 'react';
import LibroDestacado from './LibroDestacado';

const Menu = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">Inicio</a>
            <a href="Seccion1.html" className="list-group-item list-group-item-action">Ficción</a>
            <a href="Seccion2.html" className="list-group-item list-group-item-action">No Ficción</a>
            <a href="Seccion3.html" className="list-group-item list-group-item-action">Fantasía</a>
            <a href="Seccion4.html" className="list-group-item list-group-item-action">Ciencia</a>
            <a href="Registracion.html" className="list-group-item list-group-item-action">Registración</a>
            <a href="Contacto.html" className="list-group-item list-group-item-action">Contacto</a>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <LibroDestacado titulo="Título Destacado 1" autor="Autor" imagenSrc="#" />
            </div>
            <div className="col-sm-6 col-lg-4">
              <LibroDestacado titulo="Título Destacado 2" autor="Autor" imagenSrc="#" />
            </div>
            <div className="col-sm-6 col-lg-4">
              <LibroDestacado titulo="Título Destacado 3" autor="Autor" imagenSrc="#" />
            </div>
            <div className="col-sm-6 col-lg-4">
              <LibroDestacado titulo="Título Destacado 4" autor="Autor" imagenSrc="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
