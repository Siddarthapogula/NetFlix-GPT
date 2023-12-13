import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { Logo } from '../utils/constants';
const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {}).
    catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, } = user;
        dispatch(addUser({uid:uid, email:email, displayName: displayName}));
        navigate("/browse");
      } 
      else {
        dispatch(removeUser());
        navigate("/");

      }
    });


  },[])

  return (
    <div className=' w-full absolute z-10 bg-gradient-to-b from-black flex justify-between'>
      <div>
        <img className='w-52 ' src= {Logo} />
      </div>
      {user&&
      <div>
      <button onClick={handleSignOut} className='text-white font-semibold p-5'>Sign out</button>
  </div>}
      
    </div>
  )
}

export default Header