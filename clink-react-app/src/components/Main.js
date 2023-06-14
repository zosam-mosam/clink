import React from "react";
import "../styles/Main.scss";
import Menu from "./Menu";
import MyPage from "./MyPage";
import Home from "./Home";

const Main = () => {
  return (
    <div className="main">
      <div className="main_backgroundTop"></div>
      <div className="main_backgroundBottom">
        <Menu />
        <div className="main_content">
          {/* <NewChallenge /> */}
          <MyPage />
          {/* <Home /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
