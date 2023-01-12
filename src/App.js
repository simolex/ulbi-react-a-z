import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

import UiNavbar from "./components/UI/navbar/UiNavbar";

function App() {
  return (
    <BrowserRouter>
      <UiNavbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
