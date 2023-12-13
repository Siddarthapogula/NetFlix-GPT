import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCards = ({poster}) => {
  return (
   
      <img className='hover:cursor-pointer rounded-sm  mr-4 w-36' src={IMG_CDN + poster} />
    
        
 
  )
}

export default MovieCards