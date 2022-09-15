import React from "react";
import "./Socials.css";
import { ImGithub, ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <h3>Socials</h3>
      <div className="social-box">
        <ImGithub color="var(--text-color)" />
        <a className="social" href="/">
          @pouryak
        </a>
      </div>
      <div className="social-box">
        <ImTwitter color="var(--text-color)" />
        <a className="social" href="/">
          @planyzed
        </a>
      </div>
      <div className="social-box">
        <FaInstagram color="var(--text-color)" />
        <a className="social" href="/">
          @pourya.js
        </a>
      </div>
    </div>
  );
};

export default Socials;
