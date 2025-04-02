import Imagem1 from "../assets/image1.png";
import Imagem2 from "../assets/image1.png";
import Imagem3 from "../assets/image1.png";

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Carrossel de Imagens */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-3 mx-auto"
        data-bs-ride="carousel"
        style={{ maxWidth: "600px" }} // Define a largura máxima do carrossel
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Imagem1} className="d-block w-100" alt="Imagem 1" />
          </div>
          <div className="carousel-item">
            <img src={Imagem2} className="d-block w-100" alt="Imagem 2" />
          </div>
          <div className="carousel-item">
            <img src={Imagem3} className="d-block w-100" alt="Imagem 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      <div className="text-center mt-5">
        <h2 className="mb-4">Bem-vindo à Página Inicial</h2>
        <p className="lead">
          Este é um exemplo simples de uma página inicial estilizada com
          Bootstrap.
        </p>
        <button className="btn btn-primary mt-3">Saiba Mais</button>
      </div>
    </div>
  );
};

export default Home;