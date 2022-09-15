import React from "react";
import "./Profile.css";
import Gigachad from "../../assets/images/gigachad.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-textbox">
        <h2>Pourya Karami</h2>
        <p>Digital Craftsman ( Developer / Designer )</p>
      </div>
      <img src={Gigachad} alt="Pourya K" className="profile-image" />
    </div>
  );
};

export default Profile;
