import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import UiLoader from "../UI/loader/UiLoader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const resp = await PostService.getById(id);
    setPost(resp.data);
  });

  const [fetchComments, isLoadingComments, errorComments] = useFetching(async (id) => {
    const resp = await PostService.getCommentsByPostId(id);
    setComments(resp.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Это пост ID ={params.id}</h1>
      {isLoading ? (
        <UiLoader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Комментарии:</h2>
      {isLoadingComments ? (
        <UiLoader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div style={{ marginTop: "15px" }} key={comm.id}>
              <h5>
                {comm.id}. {comm.name}
              </h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
