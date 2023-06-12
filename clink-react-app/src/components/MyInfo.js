import React from "react";
import "../styles/MyInfo.css";
import basicPhoto from "../assets/basicPhoto.jpg";

const MyInfo = () => {
  return (
    <div className="myInfo">
      <div className="image">
        <img src={basicPhoto} alt="basicPhoto" id="img"></img>
      </div>
      <div className="name">노조 님</div>
      <div className="pages">
        <br></br>
        <br></br>
        <a href="#!">MyPage</a> &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="#!">Logout</a>
      </div>
    </div>
  );
};

export default MyInfo;