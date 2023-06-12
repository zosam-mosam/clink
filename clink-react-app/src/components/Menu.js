import React from "react";
import "../styles/Menu.css";
import MyInfo from "./MyInfo";

const Menu = () => {
  return (
    <div className="menu">
      <MyInfo />
      <div className="buttonList"></div>
    </div>
  );
};

export default Menu;
