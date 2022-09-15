import React from "react";
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
          <a href="/" alt="logo" className="logo">
            Pourya Karami
          </a>
          <nav className="nav">
            <ul>
              <li>Works</li>
              <li>Posts</li>
              <li>Github</li>
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
