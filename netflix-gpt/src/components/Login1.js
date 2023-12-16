import React, { useRef, useState } from 'react'
import Header from './Header'
import { chechValidity } from '../utils/validation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_IMG } from '../utils/constants';


const Login1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(null);
  const [sign, setSign] = useState(true);
  
  const HandleIsSignClick = ()=>{
    setSign(!sign);
  }
  
  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  const handleValidity = ()=>{
    const message = (chechValidity(Email.current.value, Password.current.value));
    setIsValid(message);
    if(message) return;

    if(!sign){
      createUserWithEmailAndPassword(auth, Email.current.value, Password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
              updateProfile(user, {
              displayName: Name.current.value
               }).then(() => {
                const {uid, email, displayName, } = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName: displayName}));
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const occuredError = errorCode;

        setIsValid(occuredError);
      });
    }
    else{
      signInWithEmailAndPassword(auth,Email.current.value, Password.current.value)
      
  .then((userCredential) => {
    const user = userCredential.user;
  
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const occuredError = errorCode;

    setIsValid(occuredError);
  });
    }
  }

  return (
    <div className='bg-gradient-to-b from-black '>
    <Header/>
    <div className=" absolute ">
        <img src={BG_IMG } className='h-screen md:h-full object-cover md:w-full ' alt="bg-theme" /> 
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className=' text-white absolute  bg-black  
     md:w-4/12 w-full h-full my-28 md:my-32 mx-auto right-0 left-0 rounded-sm p-16 bg-opacity-80'>

      <h1 className='  font-semibold text-3xl py-4'>{sign?"Sign In":"Sign up"}</h1>

      {!sign &&<input ref={Name} type='text' placeholder='User Name' 
      className=' bg-gray-800 p-2 my-4 w-full rounded-sm' />}

      <input ref={Email} type='text' placeholder='Email Address' 
      className=' bg-gray-800 p-2 my-4 w-full rounded-sm' />

      <input ref={Password} type='password' placeholder='Password' 
      className='  bg-gray-800 p-2 my-4 w-full rounded-sm' />

      <p className=' text-red-600 font-semibold '>{isValid}</p>

      <button className=' p-2 my-6   bg-red-700 py-2 w-full rounded-sm' 
      onClick={handleValidity}
      >{sign?"Sign In":"Sign up"}</button>

       <p onClick={HandleIsSignClick} 
       className=' cursor-pointer hover:underline'>
        {sign?"New to Netflix? Sign up now.":"Already Resgistered? Sign In now."}</p>

    </form>
    </div>

  ) 
}

export default Login1