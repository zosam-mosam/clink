import React from 'react';
import Button from './Button';
import '../styles/AccountInfo.scss';

const AccountInfo = () => {
  return (
    <div className="accountInfo">
      <div className="consumptionBox">
        <div className="leftBox">
          <h1>소비 계좌</h1>
          <br />
          <Button width="40px" height="30px" background="none" border="none">
            <h2>수정</h2>
          </Button>
          /
          <Button width="40px" height="30px" background="none" border="none">
            <h2>등록</h2>
          </Button>
        </div>
        <div className="rightBox">
          <img></img>
          <div className="accountNum"><b>농협은행</b> 352-0454-9241-03</div>
        </div>
      </div>
      <div className="savingBox">
        <div className="leftBox">
          <h1>저축 계좌</h1>
          <br />
          <Button
            width="40px"
            height="30px"
            backgroundColor="none"
            border="none"
          >
            <h2>수정</h2>
          </Button>
           / 
          <Button
            width="40px"
            height="30px"
            background-color="rgba( 255, 255, 255, 0 )"
            border="none"
          >
            <h2>등록</h2>
          </Button>
        </div>
        <div className="rightBox">
          <img></img>
          <div className="savingNum"><b>농협은행</b> 352-0454-9241-03</div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
