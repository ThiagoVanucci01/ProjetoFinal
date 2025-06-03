import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Coluna Desenvolvedores */}
          <div className="col-3 text-center mb-2">
            <div className="text-center text-md-start small">
              <span className="fw-bold text-warning">Desenvolvedores</span>
            </div>
            <p className="mb-1 text-md-start">
              <a
                href="https://github.com/ThiagoVanucci01"
                className="text-warning text-decoration-none"
              >
                <i className="bi bi-github me-1"></i>Thiago Vanucci
              </a>
              <br />
              <a
                href="https://github.com/Tiagop244"
                className="text-warning text-decoration-none"
              >
                <i className="bi bi-github me-1"></i>Tiago Pereira
              </a>
            </p>
          </div>

          {/* Coluna Direitos Autorais */}
          <div className="col-6 text-center">
            <p className="mb-0">
              © 2025 Pinturas Tiago Duarte. Todos os direitos reservados.
            </p>
          </div>

          {/* Coluna Fale Conosco */}
          <div className="col text-center text-md-end small">
            <div className="text-center text-md-end ">
              <span className="fw-bold text-warning">Fale Conosco</span>
            </div>
            <p className="mb-1">
              📞{" "}
              <a
                href="tel:+5514981117141"
                className="text-warning text-decoration-none"
              >
                +55 (14) 98111-7141
              </a>
            </p>
            <p className="mb-0">
              ✉️{" "}
              <a
                href="mailto:goldpinturasjau@gmail.com"
                className="text-warning text-decoration-none"
              >
                goldpinturasjau@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
