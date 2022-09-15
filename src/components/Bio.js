import React from "react";
import "./Bio.css";

const Bio = () => {
  return (
    <>
      <section className="bio">
        <h3>Bio</h3>
        <div className="bio-item">
          <span>1993</span>
          <p>Born in Bander-e-Bushehr (بوشهر), Iran.</p>
        </div>
        <div className="bio-item">
          <span>1993</span>
          <p>
            Going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet..
          </p>
        </div>
        <div className="bio-item">
          <span>2019</span>
          <p>Taught myself how to design and develop web applications.</p>
        </div>
        <div className="bio-item">
          <span>2020 to present</span>
          <p>Working as a full time freelancer.</p>
        </div>
        <div className="hobbies">
          <h3>I ♥</h3>
        </div>
        <p>
          Cars, books, football, working out, fantasy/anime series and solving
          coding challenges
        </p>
      </section>
    </>
  );
};

export default Bio;
