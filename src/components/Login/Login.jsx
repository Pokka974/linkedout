import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth } from '../../Firebase/firebase'
function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()  
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
        dispatch(login({
            email: userAuth.user.email,
            userId: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL
        }))
    })
    .catch(error => alert(error))
  }

  const register = () => {
    if(!name){
      return alert('Please enter a full name!')
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(userAuth => {
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic
        })
        .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                userId: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic
            }))
        })
    })
    .catch(error => alert(error))
  }

  return (
    <div className='grid place-items-center ml-auto mr-auto pt-24 pb-24'>
      <img 
        src='https://i.imgur.com/GcweuCa.png' 
        alt="linkedin banner" 
        className='object-contain h-40 mt-3 mb-3'
        />

      <form className='flex flex-col' action="">
        <input autoComplete='on'
            className='w-96 h-14 text-md pl-1 mb-1 rounded-md ' 
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Fullname (required if registering)' 
            type="text" />
        <input autoComplete='on'
            className='w-96 h-14 text-md pl-1 mb-1 rounded-md ' 
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}
            placeholder='Profile pic URL (optional)' 
            type="text" />
        <input autoComplete='on'
            className='w-96 h-14 text-md pl-1 mb-1 rounded-md '
            value={email}
            onChange={e => setEmail(e.target.value)} 
            placeholder='Email' 
            type="email" />
        <input autoComplete='on'
            className='w-96 h-14 text-md pl-1 mb-1 rounded-md ' 
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password' 
            type="password" />
        <button 
            className='w-96 h-14 text-white bg-blue-600 text-lg rounded-md ' 
            type='submit' 
            onClick={loginToApp}>Sign In</button>
      </form>

      <p className='mt-5'>Not a member?{" "}
          <span 
            onClick={register} 
            className='text-blue-600 cursor-pointer'>Register Now</span>
      </p>
    </div>
  )
}

export default Login