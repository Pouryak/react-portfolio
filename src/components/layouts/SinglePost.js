import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";
import { MdArrowForwardIos } from "react-icons/md";

const SinglePost = ({ title, year, img, features, tags, description }) => {
  const randomKey = (length = 8) => {
    // Declare all characters
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // Pick characers randomly
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  };

  return (
    <div className="single">
      <div className="single-nav">
        <Link className="single-btn" to={"/works"}>
          Works
        </Link>
        <span className="single-dash">
          <MdArrowForwardIos size={12} color={"var(--text-color)"} />
        </span>
        <h3 className="single-title">{title}</h3>
        <p className="single-year">{year}</p>
      </div>
      <p className="single-description">{description}</p>
      <ul>
        {features.map((feature) => (
          <li key={randomKey()}>{feature}</li>
        ))}
      </ul>
      <div className="tags">
        <ul>
          {Object.entries(tags).map(([key, value]) => {
            return (
              <li className="tag" key={randomKey()}>
                <span className="tag-icon">{key}</span>
                <span className="tag-text">{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <img className="single-img" src={img} alt="work-img" />
    </div>
  );
};

export default SinglePost;
