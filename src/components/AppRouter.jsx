import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";
import UiLoader from "./UI/loader/UiLoader";
const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <UiLoader />;
  }

  return (
    <div className="main">
      {isAuth ? (
        <Routes>
          {privateRoutes.map((r) => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((r) => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))}
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
