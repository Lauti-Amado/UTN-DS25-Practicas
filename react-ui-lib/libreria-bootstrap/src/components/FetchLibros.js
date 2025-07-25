import { useState, useEffect } from 'react';

const useFetchLibros = () => {
  const [librosIniciales, setLibrosIniciales] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://openlibrary.org/subjects/science_fiction.json?limit=6')
      .then(res => res.json())
      .then(data => {
        const libros = data.works.map((libro, i) => ({
          id: i + 1,
          titulo: libro.title,
          autor: libro.authors?.[0]?.name || 'Autor desconocido',
          imagenSrc: libro.cover_id
            ? `https://covers.openlibrary.org/b/id/${libro.cover_id}-M.jpg`
            : '/img/placeholder.jpg',
        }));
        setLibrosIniciales(libros);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al obtener libros:', error);
        setCargando(false);
      });
  }, []);

  return { librosIniciales, cargando };
};

export default useFetchLibros;
