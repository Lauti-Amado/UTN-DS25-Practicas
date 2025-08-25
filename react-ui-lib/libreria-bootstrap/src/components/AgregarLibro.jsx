import React, { useState, useContext } from "react";
import { LibroContext } from "./LibroContext";

const FormularioAgregarLibro = () => {
  const { agregarLibro } = useContext(LibroContext);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [precio, setPrecio] = useState("");
  const [mensaje, setMensaje] = useState(null); 
  const [tipoMensaje, setTipoMensaje] = useState("success");
  const manejarSubmit = async (e) => {
    e.preventDefault();
    if (titulo.trim() && autor.trim() && precio.trim()) {
      const nuevoLibro = {
        title: titulo,
        author: autor,
        price: parseInt(precio, 10),
        imageUrl: "/img/placeholder.jpg",
      };

      try {
        await agregarLibro(nuevoLibro); 
        setMensaje("✅ Libro agregado correctamente.");
        setTipoMensaje("success");
        setTitulo("");
        setAutor("");
        setPrecio("");
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
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
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
