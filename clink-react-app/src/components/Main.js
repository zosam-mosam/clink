import React from 'react';
import '../styles/Main.scss';
import NewChallenge from './NewChallenge';
import Menu from './Menu';

const Main = ({ titles, contents }) => {
  return (
    <div className="main">
      <div className="backgroundTop"></div>
      <div className="backgroundBottom">
        <Menu />
        <div className="content">
          <NewChallenge />
        </div>
      </div>
    </div>
  );
};

export default Main;
