import React, { createContext, useState, useEffect } from 'react';
import useFetchLibros from './FetchLibros';

export const LibroContext = createContext();

export const LibroProvider = ({ children }) => {
  const { librosIniciales, cargando, error } = useFetchLibros();
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    setLibros(librosIniciales);
  }, [librosIniciales]);

const agregarLibro = (nuevoLibro) => {
  fetch('http://localhost:3000/api/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: nuevoLibro.title,
      author: nuevoLibro.author,
      price: nuevoLibro.price,
      imageUrl: nuevoLibro.imageUrl || '/img/placeholder.jpg',
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error('Error al guardar el libro');
      return res.json();
    })
    .then((libroAgregado) => {
      console.log('✅ Libro agregado:', libroAgregado);
      setLibros((prev) => [...prev, libroAgregado]);
    })
    .catch((err) => console.error('❌ Error al agregar libro:', err));
};

  return (
    <LibroContext.Provider value={{ libros, agregarLibro, cargando, error }}>
      {children}
    </LibroContext.Provider>
  );
};
