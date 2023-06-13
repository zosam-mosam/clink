import React from "react";
import "../styles/MenuButtonList.css";
import MenuButton from "./MenuButton";
import targetDisabled from "../assets/targetDisabled.jpg";
import homeDisabled from "../assets/homeDisabled.png";
import targetActive from "../assets/targetActive.png";
import homeActive from "../assets/homeActive.png";

const MenuButtonList = () => {
  return (
    <div className="menuButtonList">
      <MenuButton disabledImgSrc={homeDisabled} activeImgSrc={homeActive}>
        Home
      </MenuButton>
      <MenuButton disabledImgSrc={targetDisabled} activeImgSrc={targetActive}>
        내 목표 1
      </MenuButton>
      <MenuButton disabledImgSrc={targetDisabled} activeImgSrc={targetActive}>
        내 목표 2
      </MenuButton>
      <MenuButton disabledImgSrc={targetDisabled} activeImgSrc={targetActive}>
        내 목표 3
      </MenuButton>
    </div>
  );
};

export default MenuButtonList;
