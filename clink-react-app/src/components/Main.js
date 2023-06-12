import React from "react";
import "../styles/Main.css";
import Menu from "./Menu";

const Main = () => {
  return (
    <div className="main">
      <div className="mainBackgroundTop"></div>
      <div className="mainBackgroundBottom">
        <div className="mainMenu">
          <Menu />
        </div>
        <div className="mainContent"></div>
      </div>
    </div>
  );
};

export default Main;
