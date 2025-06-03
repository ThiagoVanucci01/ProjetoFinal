import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        {/* Texto centralizado dos direitos autorais */}
        <div className="row">
          <div className="col-12 text-center mb-2">
            <p className="mb-0">
              © 2025 Pinturas Tiago Duarte. Todos os direitos reservados.
            </p>
          </div>

          {/* "Fale Conosco" em uma linha separada */}

          <div className="col-12 text-center text-md-end small mb-1">
            <span className="fw-bold text-warning">Fale Conosco</span>
          </div>

          {/* Telefone e Email abaixo, também alinhados à direita em telas maiores */}

          <div className="col-12 text-center text-md-end small">
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
