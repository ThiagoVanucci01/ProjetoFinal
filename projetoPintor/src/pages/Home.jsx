import Imagem1 from "../assets/image1.png";
import Imagem2 from "../assets/WhatsApp Image 2025-05-20 at 09.12.27.jpeg";
import Imagem3 from "../assets/WhatsApp Image 2025-05-20 at 09.22.54.jpeg";

const Home = () => {
  return (
    <div className="container p-0">
      {/* Carrossel de Imagens */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mx-auto"
        data-bs-ride="carousel"
        style={{ maxWidth: "800px" }} // Define a largura máxima do carrossel
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

      <div className="px-6 py-8">
        <h1 className="text-4xl font-black text-center text-black font-sans tracking-tight">
          Quem Somos
        </h1>
        <h2 className="text-3xl font-bold text-center text-[#409fbb] mb-4 font-sans tracking-tight">
          Nosso Trabalho
        </h2>
        <p className="text-black text-base leading-relaxed text-center mx-auto max-w-md">
          Somos um empresa com 10 anos de experiência, criada por um pintor com
          mais de 20 anos de experiência no mercado, com o objetivo de
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
