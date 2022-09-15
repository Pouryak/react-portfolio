import React from "react";
import "./Posts.css";
import WorksDetails from "./WorksDetails";
import SinglePost from "./SinglePost";

const Posts = () => {
  return (
    <div className="posts-box">
      {WorksDetails.map((post) => (
        <SinglePost
          key={post.id}
          img={post.img}
          title={post.title}
          caption={post.caption}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default Posts;
