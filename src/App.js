import React, { useMemo, useState } from "react";
// import { createPortal } from "react-dom";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import UiButton from "./components/UI/button/UiButton";
import UiModal from "./components/UI/modal/UiModal";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "3 JavaScript - язык программирования" },
    { id: 2, title: "JavaScript 2", body: "2 JavaScript - язык программирования" },
    { id: 3, title: "JavaScript 3", body: "1 JavaScript - язык программирования" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log("sorts");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

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
