import React, { useState, useContext } from "react";
import { LibroContext } from "./LibroContext";
import useFetchAutores from "../hooks/useFetchAutores"; // 👈 hook que trae autores

const FormularioAgregarLibro = () => {
  const { agregarLibro } = useContext(LibroContext);
  const { autores, refetch } = useFetchAutores();
  const [titulo, setTitulo] = useState("");
  const [autorId, setAutorId] = useState(""); // 👈 guarda ID seleccionado (string)
  const [precio, setPrecio] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("success");

  const manejarSubmit = async (e) => {
    e.preventDefault();
    if (titulo.trim() && autorId && precio.trim()) {
      const nuevoLibro = {
        title: titulo,
        authorId: Number(autorId), 
        price: Number(precio),     
        imageUrl: "/img/placeholder.jpg",
      };

      try {
        await agregarLibro(nuevoLibro);
        setMensaje("✅ Libro agregado correctamente.");
        setTipoMensaje("success");
        setTitulo("");
        setAutorId("");
        setPrecio("");
        refetch(); 
      } catch (error) {
        setMensaje("❌ Error al agregar el libro.");
        setTipoMensaje("danger");
      }
    } else {
      setMensaje("⚠️ Todos los campos son obligatorios.");
      setTipoMensaje("warning");
    }
  };

  return (
    <div>
      <form onSubmit={manejarSubmit} className="mt-4">
        <h5>Agregar nuevo libro</h5>

        {mensaje && (
          <div className={`alert alert-${tipoMensaje}`} role="alert">
            {mensaje}
          </div>
        )}

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <select
          className="form-control mb-2"
          value={autorId}
          onChange={(e) => setAutorId(e.target.value)}
        >
          <option value="">Selecciona un autor</option>
          {autores.map((autor) => (
            <option key={autor.id} value={autor.id}>
              {autor.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-100">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormularioAgregarLibro;
