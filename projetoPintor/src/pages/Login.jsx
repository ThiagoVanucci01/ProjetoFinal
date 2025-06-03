import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderSimples from "../components/header/HeaderSimples";
import "../App.css";

const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem("devlogin", JSON.stringify({ nome, email }));
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
                className="form-control bg-transparent border-black"
                type="text"
                name="frmNome"
                id="frmNome"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="frmEmail">
                E-mail:
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control bg-transparent border-black"
                type="email"
                name="frmEmail"
                id="frmEmail"
              />
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
