import React, { useEffect, useState } from "react";

const Perfil = () => {
  const [perfil, setPerfil] = useState({ nome: "", celular: "", perfilId: "" });
  const [carregando, setCarregando] = useState(true);
  const [mensagem, setMensagem] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [senha, setSenha] = useState("");
  const [msgSenha, setMsgSenha] = useState("");

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPerfil = async () => {
      if (!email) {
        setCarregando(false);
        setModoEdicao(true);
        return;
      }
      try {
        const response = await fetch(
          `http://www.tppinturas.somee.com/api/Perfil/GetProfileByEmail/${encodeURIComponent(
            email
          )}`,
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
          setModoEdicao(true);
        } else {
          setModoEdicao(true);
        }
      } catch (error) {
        setMensagem("Erro ao buscar perfil.");
        setModoEdicao(true);
      } finally {
        setCarregando(false);
      }
    };
    fetchPerfil();
  }, [email, token]);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    try {
      let response;
      if (perfil.perfilId) {
        // Atualizar perfil existente
        response = await fetch(
          `http://www.tppinturas.somee.com/api/Perfil/UpdateProfileByEmail/${encodeURIComponent(
            email
          )}`,
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
        // Criar novo perfil
        response = await fetch(
          `http://www.tppinturas.somee.com/api/Perfil/CreateProfile/${encodeURIComponent(
            email
          )}`,
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

  // Função para alterar a senha
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMsgSenha("");
    if (!senha) {
      setMsgSenha("Digite a nova senha.");
      return;
    }
    try {
      const response = await fetch(
        `http://www.tppinturas.somee.com/api/Perfil/ChangePassword/${encodeURIComponent(email)}`,
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
    <div className="container mt-5">
      <h2>Perfil</h2>
      {mensagem && <div className="alert alert-info">{mensagem}</div>}
      <form onSubmit={handleSubmit} className="col-12 col-md-6">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
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
            className="form-control"
            name="celular"
            value={perfil.celular}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>

      <form onSubmit={handleChangePassword} className="col-12 col-md-6 mt-4">
        <div className="mb-3">
          <label className="form-label">Nova Senha</label>
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a nova senha"
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Alterar Senha
        </button>
        {msgSenha && <div className="mt-2 alert alert-info">{msgSenha}</div>}
      </form>
    </div>
  );
};

export default Perfil;