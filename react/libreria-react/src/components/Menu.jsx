// src/components/Menu.jsx
import React from 'react';
import LibroDestacado from './LibroDestacado';

const Menu = () => {
  return (
    <div id="menu">
      <a href="#">Inicio</a><br />
      <a href="Seccion1.html">Ficción</a>
      <LibroDestacado titulo="Título Destacado 1" autor="Autor" imagenSrc="#" />

      <a href="Seccion2.html">No Ficción</a>
      <LibroDestacado titulo="Título Destacado 2" autor="Autor" imagenSrc="#" />

      <a href="Seccion3.html">Fantasía</a>
      <LibroDestacado titulo="Título Destacado 3" autor="Autor" imagenSrc="#" />

      <a href="Seccion4.html">Ciencia 4</a>
      <LibroDestacado titulo="Título Destacado 4" autor="Autor" imagenSrc="#" />

      <a href="Registracion.html">Registración</a><br />
      <a href="Contacto.html">Contacto</a>
    </div>
  );
};

export default Menu;
