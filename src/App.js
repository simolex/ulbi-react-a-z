import React, { useState } from "react";
import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "JavaScript - язык программирования" },
    { id: 2, title: "JavaScript 2", body: "JavaScript - язык программирования" },
    { id: 3, title: "JavaScript 3", body: "JavaScript - язык программирования" },
  ]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Список постов</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
