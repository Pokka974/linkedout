import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOptions from './HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../Firebase/firebase';
import { logout, selectUser } from '../../features/userSlice';
function Header() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signout()
  }

  return (
      <div className='bg-white sticky top-0 z-999 flex justify-evenly border-b-[0.1px] py-2 w-full'>
        <div className="flex">
          <img 
            className='h-10 mr-3 object-contain cursor-pointer'
            src="https://i.imgur.com/NroHPhY.png" 
            alt="linkedin logo" />
          <div className='p-2 h-10 flex items-center rounded-md text-gray-600
          bg-gray-200'>
            <SearchIcon/>
            <input className='outline-none border-0 bg-transparent' type="text" />
          </div>
        </div>

        <div className="flex ">
          <HeaderOptions Icon={HomeIcon} title='Accueil' />
          <HeaderOptions Icon={SupervisorAccountIcon} title='Réseau' />
          <HeaderOptions Icon={BusinessCenterIcon} title='Emplois' />
          <HeaderOptions Icon={ChatIcon} title='Messagerie' />
          <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
          <HeaderOptions 
            avatar={true}
            title='Vous' 
            onClick={logoutOfApp} />
        </div>
      </div>
  )
}

export default Header