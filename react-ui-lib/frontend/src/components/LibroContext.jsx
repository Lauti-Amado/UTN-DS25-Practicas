import React, { createContext, useState, useEffect } from 'react';
import useFetchLibros from './FetchLibros';
import { getToken } from '../helpers/auth';

export const LibroContext = createContext();

export const LibroProvider = ({ children }) => {
  const { librosIniciales, cargando, error, refetch } = useFetchLibros();
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    setLibros(librosIniciales);
  }, [librosIniciales]);

  const agregarLibro = (nuevoLibro) => {
    const token = getToken();
    fetch('http://localhost:3000/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(nuevoLibro),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(
            errorData.errors?.map((e) => e.message).join(', ') ||
              errorData.message ||
              'Error al guardar el libro'
          );
        }
        return res.json();
      })
      .then(() => {
        refetch();
      })
      .catch((err) => {
        console.error('❌ Error al agregar libro:', err);
        alert(err.message);
      });
  };

  return (
    <LibroContext.Provider value={{ libros, agregarLibro, cargando, error }}>
      {children}
    </LibroContext.Provider>
  );
};