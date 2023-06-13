import React, { useState } from "react";
import "../styles/MenuButton.css";

const MenuButton = ({ disabledImgSrc, activeImgSrc, children }) => {
  const [IsHover, setIsHover] = useState(false);

  return (
    <div
      className="menuButton"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <img
        src={IsHover ? activeImgSrc : disabledImgSrc}
        alt="menuButtonImg"
      ></img>
      &nbsp;&nbsp;&nbsp;&nbsp;
      {children}
    </div>
  );
};

export default MenuButton;
