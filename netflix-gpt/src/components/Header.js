import React from 'react'
import { useNavigate } from 'react-router-dom';
import userSlice from '../utils/userSlice';
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className=' w-full absolute z-10 bg-gradient-to-b from-black flex justify-between'>
      <div>
        <img className='w-52 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
      </div>
      {user&&
      <div>
      <button onClick={handleSignOut} className='text-white font-semibold p-5'>Sign out</button>
  </div>}
      
    </div>
  )
}

export default Header