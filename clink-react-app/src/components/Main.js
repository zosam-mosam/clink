import React from "react";
import "../styles/Main.scss";
import Menu from "./Menu";
import MyChallenge from "./MyChallenge";
import Home from "./Home";
import MyPage from "./MyPage";
import NewChallenge from "./NewChallenge";
import BarChartEX from "./BarChart";
import TableList from "./TableChart";
import Fillter from "./Fillter";
const Main = ({ titles, contents }) => {
  return (
    <div className="main">
      <div className="main_backgroundTop"></div>
      <div className="main_backgroundBottom">
        <Menu />
        <div className="main_content">
          {/* <MyChallenge /> */}
          <Fillter />
          <TableList titles={titles} contents={contents} />
        </div>
      </div>
    </div>
  );
};

export default Main;
