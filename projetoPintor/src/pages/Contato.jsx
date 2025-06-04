import { useState } from "react";

const Contato = () => {
  const [formEnviado, setFormEnviado] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações
    if (nome.trim().length < 3) {
      setErro("O nome deve ter pelo menos 3 letras.");
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
              <div className="col-7 mx-auto">
                {erro && <div className="alert alert-danger">{erro}</div>}
                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">
                    CEP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="CEP"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu CEP"
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">
                  Local de serviço
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Selecione o local...</option>
                    <option>Prédio</option>
                    <option>Casa</option>
                    <option>Loja</option>
                    <option>Apartamento</option>
                    <option>Outros...</option>
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
                <button type="submit" className="btn btn-primary">
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
