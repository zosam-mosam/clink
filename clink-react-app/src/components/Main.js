import React from "react";
import "../styles/Main.scss";
import Menu from "./Menu";

const Main = () => {
  return (
    <div className="main">
      <div className="backgroundTop"></div>
      <div className="backgroundBottom">
        <Menu />
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Main;
