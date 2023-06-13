import React from "react";
import "../styles/MyChallenge.scss";
import Resolution from "./Resolution";
import ChartCard from "./ChartCard";

const MyChallenge = () => {
  return (
    <div className="myChallenge">
      <Resolution />
      <div className="cardContainer">
        <ChartCard></ChartCard>
        <ChartCard></ChartCard>
      </div>
    </div>
  );
};

export default MyChallenge;
