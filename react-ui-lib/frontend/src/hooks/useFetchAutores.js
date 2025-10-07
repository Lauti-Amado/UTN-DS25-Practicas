import { useState, useEffect } from "react";
import { API_URL } from '../config';

const useFetchAutores = () => {
  const [autores, setAutores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const fetchAutores = () => {
    setCargando(true);
    fetch(`${API_URL}/api/authors`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener autores");
        return res.json();
      })
      .then((data) => {
        setAutores(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener autores:", error);
        setError(error.message);
        setCargando(false);
      });
  };

  useEffect(() => {
    fetchAutores();
  }, []);

  return { autores, cargando, error, refetch: fetchAutores };
};

export default useFetchAutores;
