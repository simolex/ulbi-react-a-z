import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
const AppRouter = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="about" element={<About />}></Route>
        <Route path="posts" element={<Posts />}></Route>
        {/* <Route path="*" element={<Navigate to="posts" replace />}></Route> */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
