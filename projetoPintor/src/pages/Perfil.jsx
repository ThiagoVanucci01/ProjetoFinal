import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/header/Header"; // seu Header normal
import "../App.css";

const Perfil = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState({
    email: "",
    senha: ""
  });
  const [editedProfile, setEditedProfile] = useState(profile);

  useEffect(() => {
    const storedProfile = localStorage.getItem("devlogin");
    if (storedProfile) {
      const data = JSON.parse(storedProfile);
      setProfile(data);
      setEditedProfile(data);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    if (
      !editedProfile.email.includes("@") ||
      editedProfile.senha.length < 6
    ) {
      alert("Todos os campos devem ser preenchidos corretamente.");
      return;
    }

    setProfile(editedProfile);
    localStorage.setItem("devlogin", JSON.stringify(editedProfile));
    setIsEditing(false);
    alert("Perfil atualizado com sucesso!");
  };

  const handleLogout = () => {
    localStorage.removeItem("devlogin");
    navigate("/login");
  };

  const handleChange = (field, value) => {
    setEditedProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleShowPassword = () => setShowPassword(show => !show);

  return (
    <>
      
      <div
        className="min-vh-100 d-flex flex-column align-items-center pt-4 pb-5 px-3"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          className="card w-100"
          style={{
            maxWidth: "400px",
            backgroundColor: "#1f2937", // bg-gray-900
            border: "1px solid #374151", // border-gray-700
            padding: "1rem",
            boxSizing: "border-box"
          }}
        >
          <h1 className="text-center mb-4 text-white">Meu Perfil</h1>

        

          {/* Email */}
          <div className="mb-3">
            <label className="form-label text-gray-300" htmlFor="email">
              E-mail:
            </label>
            {isEditing ? (
              <input
                type="email"
                id="email"
                value={editedProfile.email}
                onChange={e => handleChange("email", e.target.value)}
                className="form-control"
                style={{
                  backgroundColor: "#374151",
                  borderColor: "#4b5563",
                  color: "white"
                }}
              />
            ) : (
              <div
                className="p-2 rounded"
                style={{
                  backgroundColor: "#374151",
                  border: "1px solid #4b5563",
                  color: "white"
                }}
              >
                {profile.email}
              </div>
            )}
          </div>

          {/* Senha */}
          <div className="mb-3">
            <label className="form-label text-gray-300" htmlFor="senha">
              Senha:
            </label>
            {isEditing ? (
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="senha"
                  value={editedProfile.senha}
                  onChange={e => handleChange("senha", e.target.value)}
                  className="form-control"
                  style={{
                    backgroundColor: "#374151",
                    borderColor: "#4b5563",
                    color: "white",
                    paddingRight: "2.5rem"
                  }}
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  style={{
                    position: "absolute",
                    right: "0.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#9ca3af",
                    cursor: "pointer",
                    padding: 0
                  }}
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                  tabIndex={-1}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            ) : (
              <div
                className="p-2 rounded"
                style={{
                  backgroundColor: "#374151",
                  border: "1px solid #4b5563",
                  color: "white",
                  fontFamily: "monospace",
                  letterSpacing: "0.3rem"
                }}
              >
                {"•".repeat(profile.senha.length)}
              </div>
            )}
          </div>

          {/* Botões */}
          <div className="d-flex justify-content-between">
            {isEditing ? (
              <>
                <button
                  className="btn btn-success flex-fill me-2"
                  onClick={handleSave}
                >
                  Salvar
                </button>
                <button
                  className="btn btn-secondary flex-fill"
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-primary flex-fill me-2"
                  onClick={handleEdit}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger flex-fill"
                  onClick={handleLogout}
                >
                  Sair
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
