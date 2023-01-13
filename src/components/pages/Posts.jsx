import React, { useEffect, useRef, useState } from "react";
import PostService from "../../API/PostService";
// import { createPortal } from "react-dom";
import PostFilter from "../PostFilter";
import PostForm from "../PostForm";
import PostList from "../PostList";
import UiButton from "../UI/button/UiButton";
import UiLoader from "../UI/loader/UiLoader";
import UiModal from "../UI/modal/UiModal";
import UiPagination from "../UI/pagination/UiPagination";
import { useFetching } from "../../hooks/useFetching";
import { usePosts } from "../../hooks/usePosts";
import "../../styles/App.css";
import { getPageCount } from "../../utils/pages";
import { useObserver } from "../../hooks/useObserver";
import UiSelect from "../UI/select/UiSelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts({ posts, sort: filter.sort, query: filter.query });
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const resp = await PostService.getAll(limit, page);
    setPosts([...posts, ...resp.data]);
    const totalCount = resp.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

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
      <UiSelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во постов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 20, name: "20" },
          { value: -1, name: "Все" },
        ]}
      />
      {postError && <h1>Произошла ошибка: {postError}</h1>}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов про JS"} />
      <div ref={lastElement} style={{ height: "20px", backgroundColor: "yellow" }}></div>
      {isPostsLoading && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <UiLoader />
        </div>
      )}
      <UiPagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};

export default Posts;
