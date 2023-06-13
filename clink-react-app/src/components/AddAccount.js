import React from 'react';
import Button from './Button';
import '../styles/AddAccount.scss';

const AddAccount = () => {
  return (
    <div className="addAccount">
        <div className="consumptionBox">
          <div className="leftBox">
            <h1>저축 계좌</h1>
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
            <button
            >
              + 새 계좌 등록
            </button>
          </div>
        </div>
    </div>
  );
};

export default AddAccount;
