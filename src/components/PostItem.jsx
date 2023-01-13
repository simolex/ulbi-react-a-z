import React from "react";
import UiButton from "./UI/button/UiButton";
import { useNavigate } from "react-router-dom";

const PostItem = ({ number, post, remove }) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <UiButton onClick={() => router(`/posts/${post.id}`)}> Открыть</UiButton>
        <UiButton onClick={() => remove(post)}> Удалить</UiButton>
      </div>
    </div>
  );
};

export default PostItem;
