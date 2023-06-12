import React from 'react';
import '../styles/Main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="mainBackgroundTop"></div>
      <div className="mainBackgroundBottom">
        <div className="mainMenu">{/* 메뉴 넣을 자리  */}</div>
        <div className="mainContent"></div>
      </div>
    </div>
  );
};

export default Main;
