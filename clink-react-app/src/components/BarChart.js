import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
// import '../styles/CircularChart.scss';
const BarChartEX = () => {
  const data = [
    {
      name: '월',
      maxPrice: 20000,
      사용금액: 18200,
      남은금액: 1800,
    },
    {
      name: '화',
      maxPrice: 20000,
      사용금액: 9100,
      남은금액: 10900,
    },
    {
      name: '수',
      maxPrice: 20000,
      사용금액: 12200,
      남은금액: 7800,
    },
    {
      name: '목',
      maxPrice: 20000,
      사용금액: 7000,
      남은금액: 13000,
    },
    {
      name: '금',
      maxPrice: 20000,
      사용금액: 10000,
      남은금액: 10000,
    },
    {
      name: '토',
      maxPrice: 20000,
      사용금액: 13500,
      남은금액: 6500,
    },
    {
      name: '일',
      maxPrice: 20000,
      사용금액: 13000,
      남은금액: 7000,
    },
  ];
  return (
    <div className="circularChart">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="사용금액" stackId="a" fill="#8884d8" />
        <Bar dataKey="남은금액" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
export default BarChartEX;
