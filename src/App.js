import React, { useState } from "react";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "JavaScript", body: "JavaScript - язык программирования" }} />
      <PostItem post={{ id: 2, title: "JavaScript", body: "JavaScript - язык программирования" }} />
      <PostItem post={{ id: 3, title: "JavaScript", body: "JavaScript - язык программирования" }} />
      <PostItem post={{ id: 4, title: "JavaScript", body: "JavaScript - язык программирования" }} />
      <PostItem post={{ id: 5, title: "JavaScript", body: "JavaScript - язык программирования" }} />
    </div>
  );
}

export default App;
