import '../styles/Login.scss';
// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';

const handleSubmit =(event)=>{
    event.preventDefault();
}
function loginHandler(){
    console.log("idpwd전송");
}

const Login =()=>{
    
    return(
        <>
        <div className='login'>
            <div className='loginTitle'>
                <h1>LOGIN</h1> 
            </div>
            <br></br><br></br>
            <div className='inputBox'>
                <form onSubmit={handleSubmit}>
                    <p>ID</p>
                    <input placeholder=' 아이디' className='input'/> <br></br><br></br><br></br>
                </form>
            </div>
            <div className='inputBox'>
                <form onSubmit={handleSubmit}>
                    <p>Password</p>
                    <input placeholder=' 비밀번호' className='input'/> <br></br>
                </form>
            </div>
            <br></br><br></br><br></br>
            <button className='btn-login' type='submit' onClick={loginHandler}>LOGIN</button>
            <br></br>
            <div className='links'>
                <div className='joinlink'>
                    <a href="join.do">회원가입</a>
                </div>
                &emsp;&emsp;&emsp;&emsp;&emsp;
                <div className='findIdPwdlink'>
                    <a href="FindIdPwd.do">아이디 | 비밀번호 찾기</a>
                </div>
            </div>
        </div>
        <br></br>
        </>
    );
};

export default Login;
