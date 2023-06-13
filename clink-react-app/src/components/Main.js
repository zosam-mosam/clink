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
      <div className="backgroundTop"></div>
      <div className="backgroundBottom">
        <Menu />
        <div className="content">
          <MyPage/>
        </div>
      </div>
    </div>
  );
};

export default Main;
