import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderSimples from "../components/header/HeaderSimples";
import "../App.css";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Zera os erros antes da validação
    let errosTemp = {};

    // Validação do nome
    if (!nome.trim()) {
      errosTemp.nome = "Por favor, preencha o nome.";
    } else if (nome.trim().length < 3) {
      errosTemp.nome = "O nome deve ter pelo menos 3 caracteres.";
    }

    // Validação do e-mail
    if (!email.includes("@")) {
      errosTemp.email = "Por favor, insira um e-mail válido.";
    }

    // Validação da senha
    if (senha.length < 6) {
      errosTemp.senha = "A senha deve ter pelo menos 6 caracteres.";
    } else {
      const uppercaseRegex = /[A-Z]/;
      const numberRegex = /[0-9]/;

      if (!uppercaseRegex.test(senha)) {
        errosTemp.senha = "A senha deve conter pelo menos uma letra maiúscula.";
      } else if (!numberRegex.test(senha)) {
        errosTemp.senha = "A senha deve conter pelo menos um número.";
      }
    }

    setErros(errosTemp);

    // Se não houver erros, salvar e redirecionar
    if (Object.keys(errosTemp).length === 0) {
      localStorage.setItem(
        "devlogin",
        JSON.stringify({ nome, email, senha })
      );
      navigate("/");
    }
  };

  return (
    <>
      <HeaderSimples />
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card LoginCard border-3 border-black p-4 col-12 col-sm-8 col-md-6 col-lg-4">
          <form onSubmit={handleLogin}>
            <h1 className="text-center mb-4">Login</h1>

            <div className="mb-3">
              <label className="form-label" htmlFor="frmNome">
                Nome:
              </label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={`form-control bg-transparent border-black ${
                  erros.nome ? "is-invalid" : ""
                }`}
                type="text"
                name="frmNome"
                id="frmNome"
              />
              {erros.nome && (
                <div className="text-danger mt-1">{erros.nome}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="frmEmail">
                E-mail:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control bg-transparent border-black ${
                  erros.email ? "is-invalid" : ""
                }`}
                type="email"
                name="frmEmail"
                id="frmEmail"
              />
              {erros.email && (
                <div className="text-danger mt-1">{erros.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="frmSenha">
                Senha:
              </label>
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={`form-control bg-transparent border-black ${
                  erros.senha ? "is-invalid" : ""
                }`}
                type="password"
                name="frmSenha"
                id="frmSenha"
              />
              {erros.senha && (
                <div className="text-danger mt-1">{erros.senha}</div>
              )}
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary w-50 m-2">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
