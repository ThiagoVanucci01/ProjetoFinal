import ImagemTextura from "../assets/img/Textura.jpg";
import AEJ from "../assets/img/AEJ.jpg";
import altopadrao from "../assets/img/Altopadrão.png";
import tt from "../assets/img/Cadeiras.jpeg";

const Sobre = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-danger mb-4">MISSÃO</h1>

      <section className="mb-5">
        <p className="lead">
          Bem-vindo! Aqui você encontrará informações sobre nossa missão, visão
          e valores. Somos uma equipe dedicada a oferecer soluções em pintura
          com foco em inovação, qualidade e comprometimento. Trabalhamos para
          transformar ideias em realidade, ajudando nossos clientes a alcançar
          resultados que superam expectativas.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-primary">Nosso Diferencial</h2>
        <p>
          Com muitos anos de experiência no mercado de pintura residencial,
          buscamos constantemente aprimorar nossos conhecimentos técnicos e
          acompanhar as inovações do setor. Combinamos materiais de alta
          performance com técnicas modernas, garantindo um acabamento superior
          em paredes, portas e massas. Além disso, adotamos práticas
          sustentáveis, reduzindo o desperdício e os resíduos no processo. Nossa
          missão é transformar ideias em realidade, ajudando nossos parceiros a
          alcançar seus objetivos.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-primary">Áreas de Atuação</h2>
        <ul>
          <li>Massa corrida e acrílica</li>
          <li>Texturas decorativas (ex: areato)</li>
          <li>Efeitos especiais: Concreto, Cimento Queimado</li>
          <li>Pintura em apartamentos, casas e prédios</li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-primary">Nossa Missão</h2>
        <p>
          Trabalhar lado a lado com nossos clientes, unindo suas ideias à nossa
          experiência técnica. Assim, entregamos resultados que refletem
          exatamente o que você deseja: qualidade, beleza e durabilidade. A sua
          satisfação é o que impulsiona o nosso crescimento.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="text-primary">Serviços que realizamos</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <ul className="mt-3">
              <li>Texturas</li>
            </ul>
            <img
              src={ImagemTextura}
              className="tamanho"
              alt="Textura"
            />
            <ul className="mt-3">
              <li>Casas e Prédios</li>
            </ul>
            <img src={AEJ} className="tamanho" alt="Prédio" />
          </div>
          <div className="col-md-6 mb-3">
            <ul className="mt-3">
              <li>Alto Padrão</li>
            </ul>
            <img src={altopadrao} className="tamanho" alt="Prédio" />
            <ul className="mt-3">
              <li>Trabalhos com cadeira suspensa</li>
            </ul>
            <img
              src={tt}
              className="tamanho"
              alt="Textura"
            />
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

export default Sobre;
