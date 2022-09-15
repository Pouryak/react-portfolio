import React from "react";
import "./Main.css";

import Hero from "../Hero";
import Profile from "../Profile";
import Work from "../Work";
import Bio from "../Bio";
import Socials from "../Socials";

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Profile />
      <Work />
      <Bio />
      <Socials />
    </main>
  );
};

export default Main;
