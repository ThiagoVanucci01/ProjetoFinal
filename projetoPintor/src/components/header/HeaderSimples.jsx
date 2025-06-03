import React from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/img/logo.png";

const HeaderSimples = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Redireciona para a página principal
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-secondary py-3"
      onClick={handleClick}
    >
      <img src={Logo} alt="" style={{ height: "50px" }} />
    </div>
  );
};

export default HeaderSimples;
