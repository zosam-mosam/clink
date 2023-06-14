import React from "react";
import "../styles/Main.scss";
import Menu from "./Menu";
import MyChallenge from "./MyChallenge";
import Home from "./Home";


const Main = () => {
  return (
    <div className="main">
      <div className="main_backgroundTop"></div>
      <div className="main_backgroundBottom">
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
