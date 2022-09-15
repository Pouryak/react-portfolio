import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = ({ img, title, caption, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <span className="post">
        <img className="post-img" src={img} alt="post-img" />
        <h4 className="post-title">{title}</h4>
        <p className="post-caption">{caption}</p>
      </span>
    </Link>
  );
};

export default SinglePost;
