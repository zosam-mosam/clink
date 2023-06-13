import React, {useState} from 'react'
import '../styles/css/userManagement.scss'
import Button from './testbutton'
export default function UserManagement() {
    const [nickname, setNickname] = useState('user');
    
    return (
    <div className='modalContainer'>
        {/* 닉네임은 props로 받아오게 나중에 수정 */}
        <p>닉네임 '{nickname}' 사용자를 비활성화 하시겠습니까?
        <br />사유를 입력하고 확인버튼을 눌러주세요.</p>
        <form className='reasonForm'>
            <p>사유 :&nbsp;</p>
            <input type="text"></input>
        </form>
        <div className='buttonDiv'>
        <Button></Button>
        <Button></Button>
        </div>
    </div>
  )
}
