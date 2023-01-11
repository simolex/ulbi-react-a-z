import React, { useState } from "react";
// import { createPortal } from "react-dom";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import UiButton from "./components/UI/button/UiButton";
import UiModal from "./components/UI/modal/UiModal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts({ posts, sort: filter.sort, query: filter.query });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <UiButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </UiButton>
      <UiModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </UiModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов про JS"} />
    </div>
  );
}

export default App;
