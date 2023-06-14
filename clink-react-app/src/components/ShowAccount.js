import React from 'react';
import Button from './Button';
import '../styles/ShowAccount.scss';

const ShowAccount = () => {
    return (
        <div className="showAccount">
          <div className="showAccount_consumptionBox">
            <div className="showAccount_leftBox">
              <h1>소비 계좌</h1>
              <Button
                width="40px"
                height="30px"
                border="none"
                backgroundColor="#9c9c9c00"
                className="btn-EditconsumptionAccount"
              >
                <h3>수정</h3>
              </Button>
              /
              <Button
                width="40px"
                height="30px"
                backgroundColor="#9c9c9c00"
                border="none"
                className="btn-RegisterConsumptionAccount"
              >
                <h3>등록</h3>
              </Button>
            </div>
            <div className="showAccount_rightBox">
              <img></img>
              <div className="showAccount_accountNum">
                <b>농협은행</b> 352-0454-9241-03
              </div>
            </div>
          </div>
      </div>
    );
};

export default ShowAccount;