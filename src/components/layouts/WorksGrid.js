import React from "react";
import WorksData from "../../data/works/WorksData";
import WorkPost from "./WorkPost";
import "./WorksGrid.css";

const WorksGrid = () => {
  return (
    <div className="posts-box">
      {WorksData.map((post) => (
        <WorkPost
          key={post.id}
          id={post.id}
          img={post.img}
          title={post.title}
          caption={post.caption}
          link={post.link}
          type="works"
        />
      ))}
    </div>
  );
};

export default WorksGrid;
