import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CatalogoPublico from "./pages/CatalogoPublico";
import Catalogo from "./pages/Catalogo";
import { LibroProvider } from "./components/LibroContext";
import Navbar from "./navbar/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <LibroProvider>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo-publico" element={<CatalogoPublico />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacto" element={<PrivateRoute><ContactPage /> </PrivateRoute>} />

                {/* Ruta protegida - solo usuarios logueados */}
                <Route
                  path="/catalogo"
                  element={
                    <PrivateRoute>
                      <Catalogo />
                    </PrivateRoute>
                  }
                />

              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LibroProvider>
    </AuthProvider>
  );
}

export default App;
