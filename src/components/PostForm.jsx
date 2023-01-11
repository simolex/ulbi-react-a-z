import React, { useState } from "react";
import UiButton from "./UI/button/UiButton";
import UiInput from "./UI/input/UiInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const AddNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post,
    };
    create(newPost);
    setPost({ title: "", body: "" });
    // console.log(bodyInputRef.current.value);
  };
  // const bodyInputRef = useRef();
  return (
    <form>
      {/* Управляемый компонент */}
      <UiInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      {/* ./Управляемый компонент */}

      <UiInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />

      {/* Неуправляемый\ Неконтролируемый компонент */}
      {/* <UiInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}
      {/* ./Неуправляемый\ Неконтролируемый компонент */}

      <UiButton onClick={AddNewPost}>Создать пост</UiButton>
    </form>
  );
};

export default PostForm;
