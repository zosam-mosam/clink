import React from 'react';
import Button from './Button';
import '../styles/AccountInfo.scss';
import AddAccount from './AddAccount';
import ShowAccount from './ShowAccount';

const AccountInfo = () => {
  return (
   <div className='accountInfo'>
   <AddAccount/>
   <ShowAccount/>
   </div>
  );
};

export default AccountInfo;
