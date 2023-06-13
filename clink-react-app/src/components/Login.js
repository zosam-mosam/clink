import "../styles/Login.scss";
import React, { useState } from "react";

const handleSubmit = (event) => {
  event.preventDefault();
};

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="loginTitle">
          <h1>LOGIN</h1>
        </div>
        <br></br>
        <br></br>
        <div className="inputBox">
          <form onSubmit={handleSubmit}>
            <p>ID</p>
            <input placeholder="아이디" /> <br></br>
            <br></br>
          </form>
        </div>
        <div className="inputBox">
          <form onSubmit={handleSubmit}>
            <p>Password</p>
            <input placeholder="비밀번호" /> <br></br>
          </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="btn-login" type="submit">
          LOGIN
        </button>
      </div>
    </>
  );
};

export default Login;
