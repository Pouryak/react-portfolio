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
                <Link className="link" to="/posts">
                  Posts
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  <ImGithub color="var(--text-color)" size={14} /> Source
                </Link>
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
