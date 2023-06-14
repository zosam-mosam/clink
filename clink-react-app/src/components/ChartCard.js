import React from "react";
import "../styles/ChartCard.scss";

const ChartCard = ({ children }) => {
  return (
    <div className="chartCard">
      <div className="textContainer">
        <div id="title">Weekly Overview</div>
        <div id="date">May 1 - May 7</div>
      </div>
      <div className="chartContainer">{children}</div>
    </div>
  );
};

export default ChartCard;
