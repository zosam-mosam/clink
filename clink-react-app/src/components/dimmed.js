import React, {useState} from 'react'
import '../styles/css/dimmed.scss'
import QuoteManagement from './quoteManagement';
/* 스크롤 안되고 흑백표시된 부분 누르면 모달창 꺼지게도 기능 넣기*/
export default function Dimmed() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const modalHandler = () => {
        setIsModalOpen(!isModalOpen);
    }
    
  return (
    <>
    {isModalOpen === true ? 
    <div className='background'>
        <QuoteManagement></QuoteManagement>
    </div> : 
    null}

    </>
  )
}
