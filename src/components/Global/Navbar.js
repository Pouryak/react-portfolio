import React from "react";
import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import "./Navbar.css";
import ToggleButton from "./ToggleButton";

const Navbar = (props) => {
  const darkModeToggle = () => {
    props.onClick();
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
        <ToggleButton
          darkModeState={props.darkModeState}
          darkModeToggle={darkModeToggle}
          key={props.darkModeState}
        />
      </div>
    </div>
  );
};

export default Navbar;
