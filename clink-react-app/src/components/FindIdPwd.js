import "../styles/FindIdPwd.scss";
import React, { useState } from "react";

const handleSubmit = (event) => {
  event.preventDefault();
};

const FindIdPwd = () => {
  return (
    <>
      <div className="findIdPwdWrap">
        <div className="findIdPwd">
          <div className="innerWrap">
            <h3>ID 찾기</h3>
            <br />
            <div className="findIdPwd_textBox">
              회원 가입 시 입력하신 이름 + 이메일로
              <br />
              아이디를 확인하실 수 있습니다.
            </div>
            <br />
            <div className="findIdPwd_inputBox">
              <form onSubmit={handleSubmit}>
                <input placeholder="NAME" className="findIdPwd_input" />
              </form>
            </div>
            <div className="findIdPwd_inputBox">
              <form onSubmit={handleSubmit}>
                <input placeholder="E-MAIL" className="findIdPwd_input" />{" "}
                <br></br>
              </form>
            </div>
            <br />
            <button className="btn-findId" type="submit">
              아이디 찾기
            </button>
            <a href="index.do" className="btn-gotoLogin">
              LOGIN
            </a>
          </div>
        </div>
        <div className="v-line"></div>
      </div>
    </>
  );
};

export default FindIdPwd;
