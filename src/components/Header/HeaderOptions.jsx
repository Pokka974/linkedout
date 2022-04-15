import React from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function HeaderOptions({ avatar, Icon, title, onClick }) {
  
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='flex flex-col items-center mr-3 text-gray-600 cursor-pointer
    hover:text-gray-900'>
      {Icon && <Icon  />}
      {avatar && <Avatar className='object-contain h-[25px] w-[25px]' 
      src={user?.photoUrl} >{user?.email[0]}</Avatar>}
      <h3 className='text-xs font-normal'>{ title }</h3>
    </div>
  )
}

export default HeaderOptions