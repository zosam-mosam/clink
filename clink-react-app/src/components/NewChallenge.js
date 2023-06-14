import React, { useState } from 'react';
import '../styles/NewChallenge.scss';
import Button from './Button';

const NewChallenge = () => {
  const [goalAmount, setGoalAmount] = useState(0);
  const [color, setColor] = useState('#ffffff');
  function btnChangeColor() {
    setColor('#0046FF');
  }

  return (
    <div className="newChallenge">
      <div className="newChallenge_header">
        <h1>새로운 목표 +</h1>
      </div>
      <div className="newChallenge_title">
        <div className="newChallenge_titleText">제목</div>
        <input></input>
      </div>
      <div className="newChallenge_promise">
        <div className="newChallenge_promiseText">다짐</div>
        <input></input>
      </div>
      <div className="newChallenge_duration">
        <div className="newChallenge_durationText">기간</div>
        <div className="newChallenge_buttonList">
          <button
            className="btn-day"
            style={{ backgroundColor: color }}
            onClick={() => {
              setGoalAmount(10000);
              // btnChangeColor();
            }}
          >
            일
          </button>

          <button
            className="btn-week"
            style={{ backgroundColor: color }}
            onClick={() => {
              setGoalAmount(70000);
              // btnChangeColor();
            }}
          >
            주
          </button>
          <button
            className="btn-week"
            style={{ backgroundColor: color }}
            onClick={() => {
              setGoalAmount(300000);
              // btnChangeColor();
            }}
          >
            월
          </button>
        </div>
      </div>
      <div className="newChallenge_moneyRange">
        {/* 목표금액 계산해서 알려주기 */}
        <div className="newChallenge_moneyRangeText">목표금액</div>
        {goalAmount}
        {/* <input type="range" min="0" max="50000"></input> */}
      </div>
      <div>
        <Button
          width="100px"
          height="50px"
          color="#ffffff"
          backgroundColor="#438AF4"
          className="btn-newChallenge"
        >
          전송
        </Button>
      </div>
    </div>
  );
};

export default NewChallenge;
