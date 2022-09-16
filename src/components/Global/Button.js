import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, path }) => {
  return (
    <div className="btn-box">
      <Link className="btn-general" to={path}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
