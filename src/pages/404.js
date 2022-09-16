import React from "react";
import Main from "../components/layouts/Main";
import Button from "../components/Global/Button";
import Divider from "../components/Global/Divider";

const NotFound = () => {
  return (
    <Main>
      <h1>Not found</h1>
      <p>The page you're looking for was not found. </p>
      <Divider />
      <Button path="/">Return to home</Button>
    </Main>
  );
};

export default NotFound;
