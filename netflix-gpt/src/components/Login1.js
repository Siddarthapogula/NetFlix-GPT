import React, { useRef, useState } from 'react'
import Header from './Header'
import { chechValidity } from '../utils/validation';

const Login1 = () => {

  
  const [isValid, setIsValid] = useState(null);
  const [sign, setSign] = useState(true);
  const HandleIsSignClick = ()=>{
    setSign(!sign);
  }

  const Email = useRef(null);
  const Password = useRef(null);

  const handleValidity = ()=>{
    setIsValid(chechValidity(Email.current.value, Password.current.value));
  }

  return (
    <div>
    <Header/>
    <div className='absolute bg-gradient-to-b from-black'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-theme" /> 
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className=' text-white absolute bg-black w-4/12 my-36 mx-auto right-0 left-0 rounded-sm p-16 bg-opacity-80'>

      <h1 className='  font-semibold text-3xl py-4'>{sign?"Sign In":"Sign up"}</h1>

      {!sign &&<input type='text' placeholder='User Name' 
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