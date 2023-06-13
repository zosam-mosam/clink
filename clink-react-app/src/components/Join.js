import '../styles/Join.scss';
// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';

const handleSubmit =(event)=>{
    event.preventDefault();
}
function joinHandler(){
    console.log("전송");
}

function requestAuth(){
    console.log("이메일전송");
}

const Join =()=>{
    return(
        <>
        <div className='joinwrap'>
            <div className='join'>
                <div className='joinTitle'>
                    <h1>회원가입</h1> 
                </div>
                <br/>
                <div className='joinInputBox'>
                    <form onSubmit={handleSubmit} className='joinFormBox'>
                        <input placeholder=' 이름' className='joinInput'/>
                        <input placeholder=' ID' className='joinInput'/>
                        <input placeholder=' 닉네임' className='joinInput'/>
                        <input placeholder=' 비밀번호' className='joinInput'/>
                        <input placeholder=' 비밀번호확인' className='joinInput'/>
                        <input placeholder=' 인증 이메일 주소' className='joinInput'/>  
                    </form>      
                </div>
                <button className='btn-auth' type='submit' onClick={requestAuth} >인증요청</button>
                
                <button className='btn-join' type='submit' onClick={joinHandler}>가입하기</button>
                <br></br>
                
            </div>
            <br></br>
        </div>
        </>
    );
};

export default Join;