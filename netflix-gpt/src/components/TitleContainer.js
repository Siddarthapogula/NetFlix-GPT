import React, { useEffect } from 'react'
import { OPTIONS } from '../utils/constants'
import {useDispatch, useSelector} from "react-redux"
import useGetMovies from '../hooks/useGetMovies'
import { addTrailerVideo } from '../utils/movieSlice'

const TitleContainer = () => {
  useGetMovies();
  const dispatch= useDispatch();
  const Movies = useSelector(store => store.movie?.nowPlayingMovies);
 const mainMovie=  Movies?.results[0];
dispatch(addTrailerVideo(mainMovie));
 console.log(mainMovie);
  return (
    <div className=' w-screen aspect-video bg-gradient-to-r from-black absolute'>
    <div className=' my-96 mx-16 absolute w-screen   z-30 text-white '>
      <h1 className='font-semibold text-3xl'>{mainMovie?.title}</h1>
      <p className='text-sm  w-3/12'>{mainMovie?.overview}</p>
      <div className='flex gap-4 my-3'>
        <button className=' px-5 py-1 bg-white text-black rounded-sm opacity-75 hover:opacity-70'>▶Play</button>
        <button className=' px-7 py-[6px] bg-white text-white rounded-sm bg-opacity-10 hover:bg-opacity-30'>ℹ️ Info</button>
      </div>
    </div>
    </div>
  )
}

export default TitleContainer