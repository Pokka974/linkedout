import React from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Sidebar() {
  const user = useSelector(selectUser)
  const recentItem = (topic) => (
    <div className='flex text-sm text-gray-500 font-bold cursor-pointer mb-[5px]
    p-[5px] hover:bg-gray-100 rounded-lg hover:text-gray-900'>
      <span className='mx-2'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='top-20 sticky flex-[0.2] rounded-lg text-center h-fit'>
      
      {/* Sidebar Top */}
      <div className='flex flex-col items-center border-[0.5px] border-gray-200
      rounded-t-lg bg-white pb-2.5 overflow-hidden gap-1'>
        <img
          className='-mb-9 w-full h-[60px] rounded-t-sm' 
          src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          alt="background" />
        <Avatar src={user.photoUrl} 
        className='mb-2.5 h-14 w-14 border-[1px] border-white' >{user.email[0]}</Avatar>
        <h2 className='text-xl font-semibold px-1'>{user.displayName}</h2>
        <h4 className='text-gray-500 text-sm px-1'>Développeur Full Stack React | NodeJs Express</h4>
      </div>
      
      {/* Sidebar stats */}
      <div className='py-3 border-[0.5px] border-gray-200 rounded-b-lg bg-white'>
        <div className='px-2.5 py-[2px] hover:bg-gray-200 cursor-pointer flex justify-between text-sm text-gray-500 font-semibold'>
          <p>Vues de votre profil</p>
          <p className='font-bold text-sky-600'>28</p>
        </div>
        <div className='px-2.5 py-[2px] hover:bg-gray-200 cursor-pointer flex justify-between text-sm text-gray-500'>
          <div className='flex flex-col items-start'>
            <p>Relations</p>
            <p className='font-bold'>Développez votre réseau</p>
          </div>
          <p className='font-bold text-sky-600'>118</p>
        </div>
      </div>

      {/* Sidebar Bottom */}
      <div className='text-left p-2.5 border-[1px] border-white bg-white rounded-lg mt-2.5'>
        <p className='font-semibold pb-2.5'>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar