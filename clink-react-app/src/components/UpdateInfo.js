import React from 'react';
import Button from './Button';
import basicPhoto from '../assets/basicPhoto.png';
import '../styles/UpdateInfo.scss';

const UpdateInfo = () => {
  return (
    <div className="updateInfo">
      <div className="container">
        <div className="header">
          <div className="headerBox">
            <div className="image">
              <img src={basicPhoto} alt="basicPhoto" id="img"></img>
            </div>
            <div className="buttonBox">
              <Button
                width="130px"
                height="33px"
                backgroundColor="#0046FF"
                border="1px solid #0046FF"
                color="#ffffff"
                margin="0 0 30px 30px"
              >
                <b>프로필 사진 변경</b>
              </Button>
              <Button
                width="50px"
                height="33px"
                backgroundColor="#ffffff"
                border="1.5px solid #0046FF"
                color="#0046FF"
                margin="0 0 30px 25px"
              >
                <b>선택</b>
              </Button>
            </div>
          </div>
        </div>
        <div className="updateInfoMain">
          <div className="id">
            <div>ID</div>
            <input></input>
          </div>
          <div className="nickName">
            <div>닉네임</div>
            <input></input>
          </div>
          <div className="name">
            <div>이름</div>
            <input></input>
          </div>
          <div className="address">
            <div>주소</div>
            <input></input>
          </div>
          <div className="pwd">
            <div>비밀번호</div>
            <input></input>
          </div>
          <div className="confirmPwd">
            <div>비밀번호 확인</div>
            <input></input>
          </div>
          <div className="btn">
            <Button
              width="50px"
              height="33px"
              backgroundColor="#0046FF"
              border="1px solid #ffffff"
              color="#ffffff"
            >
              수정
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
