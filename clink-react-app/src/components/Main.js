import React from 'react';
import '../styles/Main.scss';
import NewChallenge from './NewChallenge';

const Main = () => {
  return (
    <div className="main">
      <div className="backgroundTop"></div>
      <div className="backgroundBottom">
        {/* 메뉴 넣을 자리 </div> */}
        <div className="content">
          <NewChallenge />
        </div>
      </div>
    </div>
  );
};

export default Main;
