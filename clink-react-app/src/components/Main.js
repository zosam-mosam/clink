import React from "react";
import "../styles/Main.scss";
import Menu from "./Menu";
import MyChallenge from "./MyChallenge";
import Home from "./Home";

const Main = () => {
  return (
    <div className="main">
      <div className="backgroundTop"></div>
      <div className="backgroundBottom">
        <Menu />
        <div className="content">
          {/* <MyChallenge /> */}
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Main;
