import React, {useState} from 'react'
import '../styles/Dimmed.scss'
import QuoteManagement from './modal/QuoteManagement';
import UserManagement from './modal/UserManagement';
/* 스크롤 안되고 흑백표시된 부분 누르면 모달창 꺼지게도 기능 넣기*/
export default function Dimmed({backgroundColor}) {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const modalHandler = () => {
        setIsModalOpen(!isModalOpen);
    }
    
  return (
    <>
    {isModalOpen === true ? 
    <div className='background' style={{backgroundColor}}>
        <QuoteManagement modalHandler={modalHandler}></QuoteManagement>
        {/* <UserManagement modalHandler={modalHandler}></UserManagement> */}
    </div> : 
    null}

    </>
  )
}
