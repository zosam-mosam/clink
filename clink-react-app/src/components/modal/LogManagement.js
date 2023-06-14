import React, { useState } from 'react'
import '../../styles/LogManagement.scss'
import TableList from '../TableChart'

export default function LogManagement({titles, contents}) {
  const [managerID, setManagerID] = useState("null");
  
  return (
    <div className='LogManagement--modalContainer'>
      <p>관리자 ID : {managerID}</p>
      <p>변경내용</p>
      <TableList titles={titles} contents={contents}></TableList>
      
    </div>
  )
}
