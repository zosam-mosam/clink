import React, { useState } from "react";
import "../styles/MenuButtonList.scss";
import MenuButton from "./MenuButton";
import targetDisabled from "../assets/targetDisabled.jpg";
import homeDisabled from "../assets/homeDisabled.png";
import targetActive from "../assets/targetActive.png";
import homeActive from "../assets/homeActive.png";

const MenuButtonList = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [commons, setCommons] = useState(["내 목표1", "내 목표2", "내 목표 3"]);
  const admins = ["사용자 관리", "명언 관리", "뱃지 관리", "관리자계정 관리"];
  const commonORAdminHandler = () => {
    //주소창이 /admin이면 admin으로
  };
  return (
    <div className="menuButtonList">
      {isAdmin === true ? (
        admins.map((admin, i) => (
          <MenuButton
            disabledImgSrc={targetDisabled}
            activeImgSrc={targetActive}
          >
            {admin}
          </MenuButton>
        ))
      ) : (
        <>
          <MenuButton disabledImgSrc={homeDisabled} activeImgSrc={homeActive}>
            Home
          </MenuButton>
          {commons.map((common, i) => (
            <MenuButton
              disabledImgSrc={targetDisabled}
              activeImgSrc={targetActive}
            >
              {common}
            </MenuButton>
          ))}
        </>
      )}
    </div>
  );
};

export default MenuButtonList;
