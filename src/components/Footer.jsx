import React from "react";
import "./Footer.css"; // Import del file CSS

const Footer = () => {
  return (
    <footer id="footer" className="py-6 bg-gray-800 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 Verve. Tutti i diritti riservati.</p>
        <p>
          Contattaci:{" "}
          <a href="mailto:info@lanostraazienda.com" className="text-blue-400 hover:underline">
            info@verve.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
