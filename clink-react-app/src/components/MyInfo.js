import React from "react";
import "../styles/MyInfo.scss";
import basicPhoto from "../assets/basicPhoto.png";

const MyInfo = () => {
  return (
    <div className="myInfo">
      <div className="image">
        <img src={basicPhoto} alt="basicPhoto" id="img"></img>
      </div>
      <div className="textArea">
        <div id="name">노조 님</div>
        <div className="pages">
          <br></br>
          <br></br>
          <a href="#!">MyPage</a> &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="#!">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
