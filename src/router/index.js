import About from "../components/pages/About";
import Error from "../components/pages/Error";
import PostIdPage from "../components/pages/PostIdPage";
import Posts from "../components/pages/Posts";
import { Navigate } from "react-router-dom";
import Login from "../components/pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "/posts", element: <Posts /> },
  { path: "*", element: <Error /> },
  { path: "/login", element: <Navigate to="/posts" replace /> },
  { path: "", element: <Navigate to="/posts" replace /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "*", element: <Navigate to="/login" replace /> },
];
