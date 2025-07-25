import React, { createContext, useState, useEffect } from 'react';
import useFetchLibros from './FetchLibros'; // <- corregido

export const LibroContext = createContext();

export const LibroProvider = ({ children }) => {
  const { librosIniciales, cargando } = useFetchLibros();
  const [libros, setLibros] = useState(() => {
    const guardados = localStorage.getItem('libros');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    if (librosIniciales.length > 0 && libros.length === 0) {
      setLibros(librosIniciales);
    }
  }, [librosIniciales]);

  useEffect(() => {
    localStorage.setItem('libros', JSON.stringify(libros));
  }, [libros]);

  const agregarLibro = (nuevoLibro) => {
    setLibros((prev) => [...prev, { ...nuevoLibro, id: prev.length + 1 }]);
  };

  return (
    <LibroContext.Provider value={{ libros, agregarLibro, cargando }}>
      {children}
    </LibroContext.Provider>
  );
};