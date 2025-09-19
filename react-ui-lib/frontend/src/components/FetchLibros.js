import { useState, useEffect } from 'react';

const useFetchLibros = () => {
  const [librosIniciales, setLibrosIniciales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const fetchLibros = () => {
    setCargando(true);
    fetch('http://localhost:3000/api/books/public')
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
  };

  useEffect(() => {
    fetchLibros();
  }, []);

  return { librosIniciales, cargando, error, refetch: fetchLibros };
};

export default useFetchLibros;