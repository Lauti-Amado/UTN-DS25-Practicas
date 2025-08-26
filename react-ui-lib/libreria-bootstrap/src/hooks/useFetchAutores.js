import { useState, useEffect } from "react";

const useFetchAutores = () => {
  const [autores, setAutores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const fetchAutores = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/authors");
      if (!res.ok) throw new Error("Error al obtener autores");
      const data = await res.json();
      setAutores(data);
      setCargando(false);
    } catch (err) {
      console.error("❌ Error al obtener autores:", err);
      setError(err.message);
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchAutores();
  }, []);

  return { autores, cargando, error, refetch: fetchAutores };
};

export default useFetchAutores;
