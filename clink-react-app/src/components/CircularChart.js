import React from "react";
import { Chart } from "react-google-charts";
import "../styles/CircularChart.scss";

const CircularChart = () => {
  const data = [
    ["title", "value"],
    ["식품", 20],
    ["교통비", 35],
    ["주거비", 50],
  ];

  const options = {
    legend: "none",
    pieSliceText: "label",
  };

  return (
    <div className="circularChart">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="350px"
        height="350px"
      />
    </div>
  );
};

export default CircularChart;
