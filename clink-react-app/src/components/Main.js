import React from 'react';
import '../styles/Main.scss';
import NewChallenge from './NewChallenge';
import Menu from './Menu';
import UpdateInfo from './UpdateInfo';
import AccountInfo from './AccountInfo';
import MyPage from './MyPage';

const Main = () => {
  return (
    <div className="main">
      <div className="main_backgroundTop"></div>
      <div className="main_backgroundBottom">
        <Menu />
        <div className="main_content">
          {/* <MyPage /> */}
          <NewChallenge />
        </div>
      </div>
    </div>
  );
};

export default Main;
