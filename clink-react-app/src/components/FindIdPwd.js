import "../styles/FindIdPwd.scss";
import React, { useState } from "react";

const handleSubmit = (event) => {
  event.preventDefault();
};

const findIdBtn = () => {};

const FindIdPwd = (props) => {
  return (
    <>
      <div className="findIdPwdWrap">
        <div className="findIdPwd">
          <div className="innerWrap">
            <h3>{props.content[0]}</h3>
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
            <button className="btn-findId" type="submit" onClick={findIdBtn}>
              아이디 찾기
            </button>
            <a href="index.do" className="btn-gotoLogin">
              LOGIN 페이지로
            </a>
          </div>
        </div>
        <div className="v-line"></div>
        <div className="findIdPwd">
          <div className="innerWrap">
            <h3>임시 비밀번호 발급</h3>
            <br />
            <div className="findIdPwd_textBox">
              가입하신 아이디 + 이메일 본인인증을 통해
              <br />
              이메일로 임시 비밀번호를 보내드립니다.
              <br />
              <br />
              확인 후 로그인하셔서 반드시 비밀번호를 변경하시기 바랍니다.
            </div>
            <br />
            <div className="findIdPwd_inputBox">
              <form onSubmit={handleSubmit}>
                <input placeholder="ID" className="findIdPwd_input" />
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
              임시 비밀번호 발급
            </button>
            <a href="index.do" className="btn-gotoLogin">
              LOGIN 페이지로
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindIdPwd;
