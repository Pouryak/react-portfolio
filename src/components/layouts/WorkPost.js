import React from "react";
import { Link } from "react-router-dom";
import "./WorkPost.css";

const WorkPost = ({ id, img, title, caption, type }) => {
  return (
    <Link
      to={`/${type}/${id}`}
      state={`/${type}`}
      style={{ textDecoration: "none" }}
    >
      <span className="post">
        <img className="post-img" src={img} alt="post-img" />
        <h4 className="post-title">{title}</h4>
        <p className="post-caption">{caption}</p>
      </span>
    </Link>
  );
};

export default WorkPost;
