import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <p>&copy; 2025 Librería. Todos los derechos reservados.</p>
      <div className="mb-2">
        <a href="#" className="mx-2 text-decoration-none">Facebook</a>
        <a href="#" className="mx-2 text-decoration-none">Twitter</a>
        <a href="#" className="mx-2 text-decoration-none">Instagram</a>
      </div>
      <p><a href="#" className="text-decoration-none">Términos y condiciones</a></p>
    </footer>
  );
};

export default Footer;
