import React from "react";
import "../styles/MyChallenge.scss";
import Resolution from "./Resolution";
import ChartCard from "./ChartCard";
import CircularChart from "./CircularChart";

const MyChallenge = () => {
  return (
    <div className="myChallenge">
      <Resolution />
      <div className="cardContainer">
        <ChartCard>
          <CircularChart />
        </ChartCard>
        <ChartCard></ChartCard>
      </div>
    </div>
  );
};

export default MyChallenge;
