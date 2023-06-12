import React from "react";
import "../styles/Menu.css";
import MyInfo from "./MyInfo";
import MenuButtonList from "./MenuButtonList";

const Menu = () => {
  return (
    <div className="menu">
      <MyInfo />
      <MenuButtonList />
    </div>
  );
};

export default Menu;
