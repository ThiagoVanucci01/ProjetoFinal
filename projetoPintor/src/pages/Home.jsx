import ImagemAutoZone from "../assets/img/AutoZone.png";
import ImagemCadeiras from "../assets/img/Cadeiras.jpeg";
import ImagemDragoneira from "../assets/img/Dragoneira.png";
import ImagemPredioCadeira from "../assets/img/PredioCadeira.png";
import ImagemSenai from "../assets/img/SenaiCadeira.png";
import ImagemPredio from "../assets/img/Predio.jpeg";

const Home = () => {
  return (
    <div className="container p-0">
      {/* Carrossel de Imagens */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mx-auto"
        data-bs-ride="carousel"
        style={{ maxWidth: "800px", maxHeight: "400px", objectFit: "cover" }} // Define a largura máxima do carrossel
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
            src={ImagemPredio} 
            className="d-block w-100" 
            style={{ maxHeight: '400px', objectFit: 'cover' }} alt="Imagem 1" />
          </div>
          <div className="carousel-item">
            <img
              src={ImagemDragoneira}
              className="d-block w-100"
              alt="Imagem 2"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImagemAutoZone}
              className="d-block w-100"
              alt="Imagem 3"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img src={ImagemSenai} className="d-block w-100" alt="Imagem 4" style={{ maxHeight: '400px', objectFit: 'cover' }} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      <div className="px-6 py-8 row justify-content-center">
        <p></p>
        <h1 className=" font-black text-center font-sans tracking-tight text-danger">
          Quem Somos
        </h1>
        <p></p>
        <p className="text-black text-center m-4 col-7">
          Somos um empresa com 11 anos de experiência, criada por um pintor com
          mais de 15 anos de experiência no mercado, com o objetivo de
          transformar os sonhos dos clientes em realidade, presando sempre a
          qualidade, confiança e segurança. tendo também vasta experiência em
          projetos residenciais e prediais, além da produção de design para seu
          projeto.
        </p>
      </div>
    </div>
  );
};

export default Home;
