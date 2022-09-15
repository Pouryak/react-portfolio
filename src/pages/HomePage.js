import React from "react";
import Main from "../components/layouts/Main";

import Hero from "../components/Global/Hero";
import Profile from "../components/Home/Profile";
import Work from "../components/Home/Work";
import Bio from "../components/Home/Bio";
import Socials from "../components/Home/Socials";

const Home = () => {
  return (
    <Main>
      <Hero />
      <Profile />
      <Work />
      <Bio />
      <Socials />
    </Main>
  );
};

export default Home;
