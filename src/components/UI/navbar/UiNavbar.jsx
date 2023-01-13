import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import UiButton from "../button/UiButton";

const UiNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logouting = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      {isAuth ? <UiButton onClick={logouting}>Выйти</UiButton> : ""}
      <div className="navbar__wrapper">
        <Link to="./about" className="navbar__links">
          О Сайте
        </Link>
        <Link to="./posts" className="navbar__links">
          Посты
        </Link>
      </div>
    </div>
  );
};

export default UiNavbar;
