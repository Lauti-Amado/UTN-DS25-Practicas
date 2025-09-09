import React, { useState } from "react";

const FormularioAgregarAutor = ({ onAutorAgregado }) => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("success");

  const manejarSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setMensaje("⚠️ El nombre es obligatorio.");
      setTipoMensaje("warning");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/authors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nombre }),
      });

      if (!res.ok) throw new Error("Error al crear autor");

      setMensaje("✅ Autor agregado correctamente.");
      setTipoMensaje("success");
      setNombre("");

      if (onAutorAgregado) onAutorAgregado();
    } catch (error) {
      console.error("❌ Error:", error);
      setMensaje("❌ Error al agregar el autor.");
      setTipoMensaje("danger");
    }
  };

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h5 className="card-title">✍️ Agregar nuevo autor</h5>

        {mensaje && (
          <div className={`alert alert-${tipoMensaje}`} role="alert">
            {mensaje}
          </div>
        )}

        <form onSubmit={manejarSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Nombre del autor"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <button type="submit" className="btn btn-secondary w-100">
            Agregar Autor
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioAgregarAutor;
