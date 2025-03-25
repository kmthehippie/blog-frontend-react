import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let params = useParams();
  console.log(params.postId);
  return (
    <div>
      <h1>Post is {params.postId} id</h1>
      <p>Here are some interesting information about the post</p>
    </div>
  );
};

export default Post;
