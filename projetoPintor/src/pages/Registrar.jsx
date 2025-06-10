import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderSimples from "../components/header/HeaderSimples";

function Registrar() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erros, setErros] = useState({});

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    let errosTemp = {};
    if (!email) errosTemp.email = "E-mail é obrigatório";
    if (!senha) errosTemp.senha = "Senha é obrigatória";
    if (senha !== confirmarSenha)
      errosTemp.confirmarSenha = "As senhas não coincidem";
    setErros(errosTemp);

    if (Object.keys(errosTemp).length > 0) return;

    try {
      const response = await fetch(
        "http://www.tppinturas.somee.com/Users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password: senha }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const firstError = Object.values(errorData.errors)[0][0];
        throw new Error(firstError);
      }

      await response.json();
      setMensagem("Registro feito com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setMensagem("Falha no registro: " + error.message);
    }
  };

  return (
    <>
      <HeaderSimples />
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card border-3 border-black p-4 col-12 col-sm-8 col-md-6 col-lg-4">
          <form onSubmit={handleRegister}>
            <h1 className="text-center mb-4">Registrar</h1>

            <div className="mb-3">
              <label htmlFor="frmEmail" className="form-label">
                E-mail:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control bg-transparent border-black ${
                  erros.email ? "is-invalid" : ""
                }`}
                type="email"
                id="frmEmail"
              />
              {erros.email && (
                <div className="text-danger mt-1">{erros.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="frmSenha" className="form-label">
                Senha:
              </label>
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={`form-control bg-transparent border-black ${
                  erros.senha ? "is-invalid" : ""
                }`}
                type="password"
                id="frmSenha"
              />
              {erros.senha && (
                <div className="text-danger mt-1">{erros.senha}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="frmConfirmarSenha" className="form-label">
                Confirmar Senha:
              </label>
              <input
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className={`form-control bg-transparent border-black ${
                  erros.confirmarSenha ? "is-invalid" : ""
                }`}
                type="password"
                id="frmConfirmarSenha"
              />
              {erros.confirmarSenha && (
                <div className="text-danger mt-1">{erros.confirmarSenha}</div>
              )}
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary w-50 m-2">Registrar</button>
            </div>
            {mensagem && <div className="text-center mt-3">{mensagem}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Registrar;
