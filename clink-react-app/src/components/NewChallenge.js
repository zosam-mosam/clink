import React from 'react';
import '../styles/NewChallenge.scss';
import Button from './Button';

const NewChallenge = () => {
  return (
    <div className="newChallenge">
      <div className="container">
        <div className="header">
          <h2>새로운 목표 +</h2>
        </div>
        <div className="title">
          <div className="titleText">제목</div>
          <input></input>
        </div>
        <div className="promise">
          <div className="promiseText">다짐</div>
          <input></input>
        </div>
        <div className="duration">
          <div className="durationText">기간</div>
          <div className="buttonList">
            <Button backgroundColor="#0046FF">일</Button>
            <Button backgroundColor="#ffffff">주</Button>
            <Button backgroundColor="#ffffff">월</Button>
          </div>
        </div>
        <div className="moneyRange">
          <div className="moneyRangeText">목표금액</div>
          <input type="range" min="0" max="50000"></input>
        </div>
        <div>
          <Button width="100px" backgroundColor="#438AF4">
            전송
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewChallenge;
