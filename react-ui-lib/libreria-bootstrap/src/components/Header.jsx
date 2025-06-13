import React from 'react';

function Header() {
  return (
    <header className="container-fluid bg-primary text-white py-3">
      <div className="container d-flex align-items-center">
        <img
          src="../../Ejercicio5/imagenes/logotipo-libreria-dibujado-mano_23-2149331221.avif"
          alt="Logo de la Librería"
          style={{ width: '80px', marginRight: '20px' }}
        />
        <h1 className="m-0">Nombre Librería</h1>
      </div>
    </header>
  );
}

export default Header;