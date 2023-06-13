import React from 'react';
import '../styles/Main.scss';
import NewChallenge from './NewChallenge';
import Menu from './Menu';
import UpdateInfo from './UpdateInfo';
import AccountInfo from './AccountInfo';

const Main = () => {
  return (
    <div className="main">
      <div className="backgroundTop"></div>
      <div className="backgroundBottom">
        <Menu />
        <div className="content">
          <AccountInfo />
          <UpdateInfo />
        </div>
      </div>
    </div>
  );
};

export default Main;