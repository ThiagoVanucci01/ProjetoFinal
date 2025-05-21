const Contato = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
      <h2 style={{ marginLeft: "-100px" }}>Solicite seu</h2>
      <h1 style={{ marginRight: "-30px" }} className="text-danger">Orçamento</h1>
      <p className="lead col-7 mx-auto">
        Estamos aqui para ajudar! Preencha o formulário abaixo ou entre em
        contato conosco através das informações fornecidas.
      </p>
      </div>
      <form>
  <div className="container">
    <div className="row">
      <div className="col-7 mx-auto">
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensagem" className="form-label">
            Mensagem
          </label>
          <textarea
            className="form-control"
            id="mensagem"
            rows="4"
            placeholder="Digite sua mensagem"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </div>
  </div>
</form>

    </div>
  );
};

export default Contato;
