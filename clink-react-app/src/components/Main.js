import React from 'react';
import '../styles/Main.scss';
import NewChallenge from './NewChallenge';
import Menu from './Menu';
import TableList from './TableChart';
import Fillter from './Fillter';
import Dimmed from './Dimmed';
const Main = ({ titles, contents }) => {
  return (
    <div className="main">
      <div className="backgroundTop"></div>
      <div className="backgroundBottom">
        <Menu /> {/* admin / common 두 가지 타입 */}
        <div className="content">
          {/* <NewChallenge /> */}
          {/* admin test */}
          {/* 개인정보 중요한 화면이면 background없이 dimmed만 */}
          {/* <Dimmed backgroundColor="#a1a1a17c"></Dimmed> */}
          <NewChallenge />
          <Fillter />
          <TableList titles={titles} contents={contents} />
          <Dimmed backgroundColor="#a1a1a17c" titles={titles} contents={contents}></Dimmed> 
        </div>
      </div>
    </div>
  );
};

export default Main;
