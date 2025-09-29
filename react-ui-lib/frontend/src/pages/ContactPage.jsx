import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../validations/contactSchema";

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    alert(`📨 Mensaje enviado por ${data.name}`);
    reset();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5" style={{ minHeight: "70vh" }}>
      <div className="card p-4 shadow w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">📧 Contacto</h2>

        <div className="mb-3 text-center">
          <p><strong>📍 Dirección:</strong> Av.60 esq. 126, Berisso, Buenos Aires</p>
          <p><strong>📞 Teléfono:</strong> +54 (0221) 412-4300</p>
          <p><strong>✉️ Email:</strong> info@milibreria.com</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre */}
          <div className="mb-3">
            <input
              {...register("name")}
              type="text"
              placeholder="Tu nombre"
              className={`form-control ${errors.name ? "input-error" : ""}`}
            />
            {errors.name && <span className="field-error">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              {...register("email")}
              type="email"
              placeholder="Tu email"
              className={`form-control ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && <span className="field-error">{errors.email.message}</span>}
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <textarea
              {...register("message")}
              placeholder="Tu mensaje"
              rows="5"
              className={`form-control ${errors.message ? "input-error" : ""}`}
            />
            {errors.message && <span className="field-error">{errors.message.message}</span>}
          </div>

          {/* Botón */}
          <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
