import React from "react";
import { useParams } from "react-router-dom";
const Blog = () => {
  const { BlogId } = useParams();

  return (
    <div>
      hello this is BLog Page
      <p>You are currenlty viewing at id {BlogId}</p>
    </div>
  );
};
export default Blog;
