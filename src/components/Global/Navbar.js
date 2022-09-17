import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import ToggleButton from "./ToggleButton";

const Navbar = (props) => {
  const [mobile, setMobile] = useState(false);

  const darkModeToggle = () => {
    props.onClick();
  };

  const mobileNavHandler = () => {
    setMobile(!mobile);
  };

  return (
    <div className="navbar">
      <div className="navb">
        <div className="leftnav">
          <Link to="/" alt="logo" className="logo">
            Pourya Karami
          </Link>
          <nav className="nav">
            <ul>
              <li>
                <Link className="link" to="/works">
                  Works
                </Link>
              </li>
              <li>
                <a
                  className="link"
                  href="https://github.com/Pouryak/react-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImGithub color="var(--text-color)" size={14} /> Source
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-nav">
          <ToggleButton
            darkModeState={props.darkModeState}
            darkModeToggle={darkModeToggle}
            key={props.darkModeState}
          />
          <div onClick={mobileNavHandler} className="mobile-nav-btn">
            <AiOutlineMenu color="white" />
          </div>
        </div>
        {mobile ? (
          <div className="mobile-nav-box">
            <div className="mobile-nav">
              <div className="mobile-nav-item">
                <Link to="/works">Works</Link>
              </div>
              <div className="mobile-nav-item">
                <a
                  href="https://github.com/Pouryak/react-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
