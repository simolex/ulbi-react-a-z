import React from "react";
import UiButton from "./UI/button/UiButton";

const PostItem = ({ number, post, remove }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <UiButton onClick={() => remove(post)}> Удалить</UiButton>
      </div>
    </div>
  );
};

export default PostItem;
