import React from 'react'
import Button from '../Button'
import '../../styles/PasswordCheck.scss'

export default function PasswordCheck(props) {
    return (
        <div className="modalContainer">
            <form className="pwCheckForm">
                <p>비밀번호 확인&nbsp;</p>
                <input type="text"></input>
            </form>
        <div className="buttonDiv">
            <Button onClick={props.modalHandler} width="100px" height="50px" backgroundColor="white" color="#438AF4" border="1px solid #438AF4" margin="0px 10px">취소</Button>
            <Button width="100px" height="50px" backgroundColor="#438AF4" color="white" border="1px solid #438AF4" margin="0px 10px">확인</Button>
        </div>
    </div>
  )
}

