import { useState, useEffect } from 'react';
import { API_URL } from '../config';

const useFetchLibros = () => {
  const [librosIniciales, setLibrosIniciales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const fetchLibros = () => {
    setCargando(true);
    fetch(`${API_URL}/api/books/public`)
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