import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "../styles/CircularChart.scss";

const CircularChart = () => {
  const data = [
    { title: "One", value: 20, color: "#2ecb7b" },
    { title: "Two", value: 35, color: "#f45bae" },
    { title: "Three", value: 50, color: "#4b5ff5" },
  ];
  return (
    <div className="circularChart">
      <PieChart
        data={data} //값
        label={({ dataEntry }) => dataEntry.title} //글씨
        lineWidth={50} //도넛 두께
        labelPosition={76} //글씨 적히는 위치
        labelStyle={{
          //글씨 스타일
          fontSize: "10px",
        }}
        animate
      />
    </div>
  );
};

export default CircularChart;
