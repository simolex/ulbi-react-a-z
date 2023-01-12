import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
// import { createPortal } from "react-dom";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import UiButton from "./components/UI/button/UiButton";
import UiLoader from "./components/UI/loader/UiLoader";
import UiModal from "./components/UI/modal/UiModal";
import UiPagination from "./components/UI/pagination/UiPagination";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";
import { getPageCount } from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts({ posts, sort: filter.sort, query: filter.query });

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const resp = await PostService.getAll(limit, page);
    setPosts(resp.data);
    const totalCount = resp.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
      {postError && <h1>Произошла ошибка: {postError}</h1>}
      {isPostsLoading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <UiLoader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список постов про JS"}
        />
      )}
      <UiPagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
