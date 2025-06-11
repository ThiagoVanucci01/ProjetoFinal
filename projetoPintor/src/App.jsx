import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "./assets/scss/styles.scss";

import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Header from "./components/header/Header";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import NaoEncontrado from "./pages/NaoEncontrado";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Registrar from "./pages/Registrar";

function AppWrapper() {
  const location = useLocation();
  const hideHeaderAndFooter =
    location.pathname === "/login" || location.pathname === "/registrar";

  return (
    <>
      {!hideHeaderAndFooter && <Header />}

      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>

        <a
          href="https://w.app/tggfzk"
          class="btn btn-success whatsapp-button"
          target="_blank"
        >
          <i class="bi bi-whatsapp"></i>
        </a>
      </main>

      {!hideHeaderAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
