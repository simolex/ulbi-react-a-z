import React, { useContext } from "react";
import { AuthContext } from "../../context";
import UiButton from "../UI/button/UiButton";
import UiInput from "../UI/input/UiInput";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logining = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Войти</h1>
      <form onSubmit={logining}>
        <UiInput type="text" placeholder="Введите логин" />
        <UiInput type="password" placeholder="Введите пароль" />
        <UiButton>Войти</UiButton>
      </form>
    </div>
  );
};

export default Login;
