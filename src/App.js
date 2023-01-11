import React, { useRef, useState } from "react";

import PostList from "./components/PostList";
import UiButton from "./components/UI/button/UiButton";
import UiInput from "./components/UI/input/UiInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "JavaScript - язык программирования" },
    { id: 2, title: "JavaScript 2", body: "JavaScript - язык программирования" },
    { id: 3, title: "JavaScript 3", body: "JavaScript - язык программирования" },
  ]);

  const [title, setTitle] = useState("");
  const bodyInputRef = useRef();

  const AddNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <UiInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        {/* ./Управляемый компонент */}

        {/* Неуправляемый\ Неконтролируемый компонент */}
        <UiInput ref={bodyInputRef} type="text" placeholder="Описание поста" />
        {/* ./Неуправляемый\ Неконтролируемый компонент */}

        <UiButton onClick={AddNewPost}>Создать пост</UiButton>
      </form>
      <PostList posts={posts} title={"Список постов про JS"} />
    </div>
  );
}

export default App;
