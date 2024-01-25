import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10">
        <img className=' fixed object-cover h-screen w-screen' src={BG_IMG} alt="bg-theme" /> 
    </div>
    <div className=' pt-[5rem] '>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </div>
  )
}

export default GptSearch