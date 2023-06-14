import React from "react";
import "../styles/WiseSaying.scss";
import basicPhoto from "../assets/wingPig.png";

const WiseSaying = ({ content, author }) => {
  return (
    <div className="wiseSaying">
      <div className="wiseSaying_textContainer">
        <div id="wiseSaying_content">
          {/* \n을 기준으로 줄바꿈 */}
          {content.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </div>
        <div id="wiseSaying_author">{author}</div>
      </div>
    </div>
  );
};

export default WiseSaying;
