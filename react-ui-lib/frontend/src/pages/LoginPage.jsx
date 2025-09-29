import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/loginSchema";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setServerError("");
    const result = await login(data.email, data.password);

    if (result.success) {
      navigate("/catalogo");
    } else {
      setServerError(result.error || " Login fallido");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-3">🔑 Iniciar Sesión</h2>

        {serverError && (
          <div className="error-message text-center mb-2">{serverError}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <input
            {...register("email")}
            type="email"
            className={`form-control mb-2 ${
              errors.email ? "input-error" : ""
            }`}
            placeholder="Email"
          />
          {errors.email && (
            <span className="field-error">{errors.email.message}</span>
          )}

          {/* Password */}
          <input
            {...register("password")}
            type="password"
            className={`form-control mb-2 ${
              errors.password ? "input-error" : ""
            }`}
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className="field-error">{errors.password.message}</span>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
