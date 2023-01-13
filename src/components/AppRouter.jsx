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
          <Route path="/ulbi-react-a-z/">
            {privateRoutes.map((r) => (
              <Route path={r.path} element={r.element} key={r.path} />
            ))}
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/ulbi-react-a-z/">
            {publicRoutes.map((r) => (
              <Route path={r.path} element={r.element} key={r.path} />
            ))}
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
