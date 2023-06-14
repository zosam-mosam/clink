import React, {useState} from 'react'
import '../../styles/UserManagement.scss'
import Button from '../Button'
export default function UserManagement(props) {
    const [nickname, setNickname] = useState('user');

    const inactiveUser = () => {
        
    }
    
    return (
    <div className='modalContainer'>
        {/* 닉네임은 props로 받아오게 나중에 수정 */}
        {/* 상태가 활성화냐 안활성화냐에 따라 화면도 다르게하기 */}
        <p>닉네임 '{nickname}' 사용자를 비활성화 하시겠습니까?
        <br />사유를 입력하고 확인버튼을 눌러주세요.</p>
        <form className='reasonForm'>
            <p>사유 :&nbsp;</p>
            <input type="text"></input>
        </form>
        <div className='buttonDiv'>
        <Button onClick={props.modalHandler} width="100px" height="50px" backgroundColor="white" color="#438AF4" border="1px solid #438AF4" margin="0px 10px">닫기</Button>
        <Button onClick={inactiveUser} width="100px" height="50px" backgroundColor="#438AF4" color="white" border="1px solid #438AF4" margin="0px 10px">추가</Button>
        </div>
    </div>
  )
}
