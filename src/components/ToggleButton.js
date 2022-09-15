import React from "react";
import { MdOutlineLightMode, MdBedtime } from "react-icons/md";
import "./ToggleButton.css";

const ToggleButton = (props) => {
  let toggleButtonColor;
  if (props.darkModeState === "light-theme") {
    toggleButtonColor = "toggle light";
  } else {
    toggleButtonColor = "toggle dark";
  }

  return (
    <div className={toggleButtonColor} onClick={props.darkModeToggle}>
      {props.darkModeState === "light-theme" ? (
        <MdBedtime
          key={props.darkModeState}
          size={20}
          fill="var(--bg-primary)"
        />
      ) : (
        <MdOutlineLightMode key={props.darkModeState} size={20} />
      )}
    </div>
  );
};

export default ToggleButton;
