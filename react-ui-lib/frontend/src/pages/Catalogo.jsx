import React, { useState } from 'react';
import { getToken, setToken } from '../helpers/auth';
import Menu from '../components/Menu';
import { API_URL } from '../config';

const Catalogo = () => {
  const token = getToken();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Error en login");
      const { data } = await res.json();
      setToken(data.token);
      window.location.reload(); // fuerza re-render con token
    } catch {
      alert("❌ Login fallido");
    }
  }

  if (!token) {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-3">🔑 Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-100">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>🔐 Catálogo Seguro</h2>
      <Menu />
    </div>
  );
};

export default Catalogo;