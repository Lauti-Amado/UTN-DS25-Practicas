import { useState, useEffect } from 'react';

const useFetchLibros = () => {
  const [librosIniciales, setLibrosIniciales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener libros');
        return res.json();
      })
      .then((data) => {
        setLibrosIniciales(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('❌ Error al obtener libros:', error);
        setError(error.message);
        setCargando(false);
      });
  }, []);

  return { librosIniciales, cargando, error };
};

export default useFetchLibros;
