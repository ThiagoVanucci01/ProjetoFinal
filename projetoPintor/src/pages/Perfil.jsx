import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Perfil = () => {
  const [perfil, setPerfil] = useState({ nome: "", celular: "", perfilId: "" });
  const [carregando, setCarregando] = useState(true);
  const [mensagem, setMensagem] = useState("");
  const [senha, setSenha] = useState("");
  const [msgSenha, setMsgSenha] = useState("");

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona se não estiver logado
    if (!email || !token) {
      navigate("/");
      return;
    }

    const fetchPerfil = async () => {
      try {
        const response = await fetch(
          `https://www.tppinturas.somee.com/api/Perfil/GetProfileByEmail/${encodeURIComponent(email)}`,
          {
            headers: {
              accept: "text/plain",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setPerfil({
            nome: data.nome || "",
            celular: data.celular || "",
            perfilId: data.perfilId || "",
          });
        } else if (response.status === 401) {
          // Token inválido, redireciona
          navigate("/");
        }
      } catch (error) {
        setMensagem("Erro ao buscar perfil.");
      } finally {
        setCarregando(false);
      }
    };

    fetchPerfil();
  }, [email, token, navigate]);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      let response;
      if (perfil.perfilId) {
        response = await fetch(
          `https://www.tppinturas.somee.com/api/Perfil/UpdateProfileByEmail/${encodeURIComponent(email)}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              perfilId: perfil.perfilId,
              nome: perfil.nome,
              celular: perfil.celular,
            }),
          }
        );
      } else {
        response = await fetch(
          `https://www.tppinturas.somee.com/api/Perfil/CreateProfile/${encodeURIComponent(email)}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              accept: "text/plain",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              nome: perfil.nome,
              celular: perfil.celular,
            }),
          }
        );
      }

      if (response.ok) {
        setMensagem("Perfil salvo com sucesso!");
      } else {
        setMensagem("Erro ao salvar perfil.");
      }
    } catch (error) {
      setMensagem("Erro ao salvar perfil.");
    }
  };

  const handleChangePassword = async () => {
    setMsgSenha("");
    if (!senha) {
      setMsgSenha("Digite a nova senha.");
      return;
    }
    try {
      const response = await fetch(
        `https://www.tppinturas.somee.com/api/Perfil/ChangePassword/${encodeURIComponent(email)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(senha),
        }
      );
      if (response.ok) {
        setMsgSenha("Senha alterada com sucesso!");
        setSenha("");
      } else {
        setMsgSenha("Erro ao alterar senha.");
      }
    } catch (error) {
      setMsgSenha("Erro ao alterar senha.");
    }
  };

  if (carregando) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card border-3 border-black p-4 col-12 col-sm-10 col-md-7 col-lg-5">
        <h2 className="text-center mb-4">Perfil</h2>

        {mensagem && <div className="alert alert-info text-center">{mensagem}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control bg-transparent border-black"
              name="nome"
              value={perfil.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Celular</label>
            <input
              type="text"
              className="form-control bg-transparent border-black"
              name="celular"
              value={perfil.celular}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nova Senha</label>
            <input
              type="password"
              className="form-control bg-transparent border-black"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite a nova senha"
            />
            {msgSenha && <div className="mt-2 alert alert-info">{msgSenha}</div>}
          </div>

          <div className="d-flex gap-2 mt-3">
            <button type="submit" className="btn btn-primary flex-fill">
              Salvar Dados
            </button>
            <button
              type="button"
              className="btn btn-warning flex-fill"
              onClick={handleChangePassword}
            >
              Alterar Senha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
