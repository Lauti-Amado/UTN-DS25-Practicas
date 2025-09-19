import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container text-center mt-5">
        <h1>📚 Bienvenido a la Librería</h1>
        <p className="lead">Elegí cómo querés navegar:</p>
        <div className="d-flex flex-column gap-3 mt-4">
          <Link to="/catalogo-publico" className="btn btn-outline-primary btn-lg">
            Ver Catálogo Público
          </Link>
          <Link to="/catalogo" className="btn btn-outline-warning btn-lg">
            Ver Catálogo (Requiere Login)
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;