import AEJ from "../assets/img/AEJ.jpg";
import autozone from "../assets/img/AutoZone.png";
import senai from "../assets/img/SenaiCadeira.png";

const Servicos = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4">Nossos Serviços</h1>

      <section className="mb-5">
        <p className="lead">
          Nosso sistema de pintura é ágil e eficiente. Diferente da maioria das
          empresas do mercado, a Pinturas Tiago Duarte sempre conta com uma
          equipe no tamanho ideal para realizar a pintura dos imóveis. Mas a
          Pinturas Tiago Duarte vai além da rapidez: entregamos também limpeza,
          profissionalismo e um acabamento impecável.
        </p>
      </section>

      <section className="mb-10">
        {/* Residencial - texto esquerda, imagem direita */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="text-primary text-2xl mb-2">🏠 Residencial</h2>
            <p>
              Está reformando ou precisa devolver um imóvel pintado? Conte com a
              nossa agilidade e qualidade. Nossa equipe própria é treinada em
              grandes obras para entregar o melhor resultado que suas paredes já
              viram. Atendemos: Casas, Apartamentos e Lojas.
            </p>
          </div>
          <div className="col-md-6">
            <img src={AEJ} alt="Imagem Residencial" className="img-fluid" />
          </div>
        </div>

        {/* Corporativa - imagem esquerda, texto direita */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <img src={senai} alt="Imagem Corporativa" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary text-2xl mb-2">💼 Corporativa</h2>
            <p>
              A primeira impressão é a que fica. Por isso, executamos a pintura
              sem interferir na rotina do seu escritório. Com mão de obra
              qualificada, garantimos um ambiente renovado e acolhedor para
              impressionar clientes e colaboradores. Pintamos: Escritórios.
            </p>
          </div>
        </div>

        {/* Comercial - texto esquerda, imagem direita */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="text-primary text-2xl mb-2">🏪 Comercial</h2>
            <p>
              Executamos a pintura com agilidade e sem atrapalhar o funcionamento
              do seu negócio. Seu espaço merece a melhor mão de obra para
              transmitir qualidade e profissionalismo a todos que passam por ele.
              Pintamos: Shoppings, Cinemas, Restaurantes, Clínicas, Lojas,
              Comércios em geral e aplicamos Pintura Antipichação.
            </p>
          </div>
          <div className="col-md-6">
            <img src={autozone} alt="Imagem Comercial" className="img-fluid" />
          </div>
        </div>

        {/* Predial - imagem esquerda, texto direita */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-3 mb-md-0">
            <img src={AEJ} alt="Imagem Predial" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary text-2xl mb-2">🏬 Predial</h2>
            <p>
              Manutenção de condomínios, da revitalização de áreas comuns à
              limpeza e pintura das laterais e janelas de edifícios. Segurança e
              qualidade de ponta. Pintamos: Condomínios, Revitalização de
              garagem, Demarcações Verticais e Horizontais, Hospitais e Escolas.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/contato")}
          aria-label="Solicitar orçamento agora"
          style={{
            backgroundColor: "#0048ff",
            color: "#fff",
            padding: "12px 24px",
            fontSize: "20px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Faça seu orçamento agora!
        </button>
      </section>
    </div>
  );
};

export default Servicos;
