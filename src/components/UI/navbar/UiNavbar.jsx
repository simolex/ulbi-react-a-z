import React from "react";
import { Link } from "react-router-dom";

const UiNavbar = () => {
  return (
    <div className="navbar">
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
