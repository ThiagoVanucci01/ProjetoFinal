import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Button,
  Image,
  NavDropdown,           // <-- novo import
} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const salvaUsuario = localStorage.getItem("devlogin");
    if (salvaUsuario) {
      try {
        setUsuario(JSON.parse(salvaUsuario));
      } catch (error) {
        console.error("Erro ao parsear usuário:", error);
        localStorage.removeItem("devlogin");
      }
    }

    const handleProfileUpdate = () => {
      const updatedUser = localStorage.getItem("devlogin");
      if (updatedUser) {
        try {
          setUsuario(JSON.parse(updatedUser));
        } catch (error) {
          console.error("Erro ao parsear usuário atualizado:", error);
          setUsuario(null);
        }
      }
    };

    window.addEventListener("profileUpdated", handleProfileUpdate);
    return () => window.removeEventListener("profileUpdated", handleProfileUpdate);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("devlogin");
    setUsuario(null);
    navigate("/");
  };

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" style={{ height: "40px" }} />
        </Link>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/sobre#navbar">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contato#navbar">Orçamento</Nav.Link>
            <Nav.Link as={Link} to="/Servicos#navbar">Nossos Serviços</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            {usuario ? (
              <>
                <Dropdown align="start">
                  <Dropdown.Toggle
                    variant="light"
                    className="rounded-circle p-0 border-0"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <Image
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(usuario.nome)}&background=2563eb&color=fff`}
                      roundedCircle
                      fluid
                      alt={usuario.nome}
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/perfil">
                      <i className="bi bi-person me-2"></i> Perfil
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={handleLogout}
                      nav
                      className="text-danger"
                      // redirecionar para a página de login após o logout
                      as={Link}
                      to="/"
                    >
                      <i className="bi bi-box-arrow-right me-2"></i> Sair
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <Link to="/login">
                <Button variant="outline-light" size="sm">
                  <i className="bi bi-person me-2"></i>
                  <span className="d-none d-md-inline">Entrar</span>
                </Button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
