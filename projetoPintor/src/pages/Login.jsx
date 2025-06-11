import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderSimples from "../components/header/HeaderSimples";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erros, setErros] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validação simples
    let errosTemp = {};
    if (!email) errosTemp.email = "E-mail é obrigatório";
    if (!senha) errosTemp.senha = "Senha é obrigatória";
    setErros(errosTemp);

    if (Object.keys(errosTemp).length > 0) return;

    try {
      const response = await fetch(
        "http://www.tppinturas.somee.com/Users/login?useCookies=false&useSessionCookies=false",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password: senha }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }

      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);

      setMensagem("Login realizado com sucesso!");
      navigate("/"); // eRedireciona para a Hom
      //Salvar os dados do usuário no localStorage
      localStorage.setItem("devlogin", JSON.stringify({ email, token }));
    } catch (error) {
      setMensagem("Falha no login: " + error.message);
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

            <div className="d-flex gap-2 mb-3">
              <button className="btn btn-primary flex-fill" type="submit">
                Entrar
              </button>
              <button
                type="button"
                className="btn btn-primary flex-fill"
                onClick={() => navigate("/registrar")}
              >
                Registrar
              </button>
            </div>
            {mensagem && <div className="text-center mt-3">{mensagem}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
