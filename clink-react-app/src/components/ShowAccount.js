import React from 'react';
import Button from './Button';
import '../styles/ShowAccount.scss';

const ShowAccount = () => {
    return (
        <div className="showAccount">
          <div className="consumptionBox">
            <div className="leftBox">
              <h1>소비 계좌</h1>
              <Button
                width="40px"
                height="30px"
                border="none"
                backgroundColor="#9c9c9c00"
              >
                <h3>수정</h3>
              </Button>
              /
              <Button
                width="40px"
                height="30px"
                backgroundColor="#9c9c9c00"
                border="none"
              >
                <h3>등록</h3>
              </Button>
            </div>
            <div className="rightBox">
              <img></img>
              <div className="accountNum">
                <b>농협은행</b> 352-0454-9241-03
              </div>
            </div>
          </div>
      </div>
    );
};

export default ShowAccount;