import { useState } from "react";

const Contato = () => {
  const [formEnviado, setFormEnviado] = useState(false);
  const [cep, setCep] = useState("");
  const [localServico, setLocalServico] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const usuarioLogado = true; // Substitua pelo estado de autenticação real

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuarioLogado) {
      setErro("Você precisa estar logado para enviar o formulário.");
      return;
    }

    // Validações
    if (cep.trim().length < 8) {
      setErro("O CEP deve ter pelo menos 8 números.");
      return;
    }

    if (localServico.trim() === "") {
      setErro("Por favor, selecione um local de serviço.");
      return;
    }

    if (mensagem.trim().length < 10) {
      setErro("A mensagem deve ter pelo menos 10 letras.");
      return;
    }

    setErro("");
    setFormEnviado(true);

    // Aqui você pode adicionar lógica de envio ao backend se necessário
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 style={{ marginLeft: "-100px" }}>Solicite seu</h2>
        <h1 style={{ marginRight: "-30px" }} className="text-danger">
          Orçamento
        </h1>
        <p className="lead col-7 mx-auto">
          Estamos aqui para ajudar! Preencha o formulário abaixo ou entre em
          contato conosco através das informações fornecidas.
        </p>
      </div>

      {formEnviado ? (
        <div className="text-center mt-5">
          <h3 className="text-success">Obrigado pelo contato!</h3>
          <p>Entraremos em contato o mais breve possível.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-7 row mx-auto">
                {erro && <div className="alert alert-danger">{erro}</div>}
                {!usuarioLogado && (
                  <div className="alert alert-warning">
                    Você precisa estar logado para enviar o formulário.
                  </div>
                )}
                <div className="col-md-6">
                  <label htmlFor="CEP" className="form-label">
                    CEP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="Digite seu CEP"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Local de serviço
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    value={localServico}
                    onChange={(e) => setLocalServico(e.target.value)}
                  >
                    <option value="">Selecione o local...</option>
                    <option value="Prédio">Prédio</option>
                    <option value="Casa">Casa</option>
                    <option value="Loja">Loja</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Outros...">Outros...</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="mensagem" className="form-label">
                    Escreva detalhes do serviço
                  </label>
                  <textarea
                    className="form-control"
                    id="mensagem"
                    rows="4"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Escreva o serviço que deseja a ser efetuado"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!usuarioLogado}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contato;
