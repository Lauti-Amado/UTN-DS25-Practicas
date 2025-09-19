import React from "react";
import { Link } from "react-router-dom";
import { getToken, clearToken } from "../helpers/auth";

const Navbar = () => {
  const token = getToken();

  const handleLogout = () => {
    clearToken();
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">📚 Librería</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo-publico">Catálogo Público</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catálogo Seguro</Link>
            </li>
            {token && (
              <li className="nav-item">
                <button className="btn btn-sm btn-light ms-2" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
