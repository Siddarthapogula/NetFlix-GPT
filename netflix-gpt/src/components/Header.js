import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { Langs, Logo } from '../utils/constants';
import { toggleGptSearch } from '../utils/GptSlice';
import { setLanguage } from '../utils/LangSlice';
const Header = () => {

  const isGpt = useSelector(store=> store.gpt.ShowGpt)
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

  const handleSearchType = ()=>{
      dispatch(toggleGptSearch())
  }
  const handleLanguage = (e)=>{
    dispatch(setLanguage(e.target.value))
  }

  return (
    <div className=' flex-col md:flex-row justify-center md:justify-between  w-full fixed z-10 bg-gradient-to-b  from-black flex '>
      <div>
        <img  className='w-52 block m-auto md:m-0' src= {Logo} />
      </div>

      {user&&
      <div className=' m-auto md:m-0'>
        {isGpt && 
            <select onClick={handleLanguage} className=' bg-gray-800 text-white rounded-lg '>
              {Langs.map((language)=><option key={language.id}  >{language.lang}</option>)}
            </select>
        }
        <button className='text-white p-2 m-2 bg-cyan-800  ' onClick={handleSearchType}>GPT Search</button>
      <button onClick={handleSignOut} className='text-white font-semibold p-5'>Sign out</button>
  </div>}
      
    </div>
  )
}

export default Header