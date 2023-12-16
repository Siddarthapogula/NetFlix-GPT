import React, { useEffect } from 'react'
import { OPTIONS } from '../utils/constants'
import {useDispatch, useSelector} from "react-redux"
import useGetMovies from '../hooks/useGetMovies'
import { addTrailerVideo } from '../utils/movieSlice'
import useGetPopularMovies from '../hooks/useGetPopularMovies'
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies'
import useGetUpCommingMovies from '../hooks/useGetUpCommingMovies'

const TitleContainer = () => {
  useGetMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpCommingMovies();

  const dispatch= useDispatch();
  const Movies = useSelector(store => store.movie?.nowPlayingMovies);
 const mainMovie=  Movies?.results[0];
dispatch(addTrailerVideo(mainMovie));
  return (
    <div>
    <div className=' w-screen aspect-video bg-gradient-to-r from-black absolute'>
    <div className=' my-80 mx-12 absolute w-screen   z-30 text-white '>
      <h1 className=' m font-semibold text-xl md:text-3xl'>{mainMovie?.title}</h1>
      <p className='text-sm  w-3/12 hidden md:block'>{mainMovie?.overview}</p>
      <div className='flex gap-4 my-3'>
        <button className='  md:px-5 md:py-1 bg-white px-[0.5rem]  text-black rounded-sm opacity-75 hover:opacity-70'>▶Play</button>
        <button className='md:px-7 py-[6px] hidden md:block bg-white text-white rounded-sm bg-opacity-10 hover:bg-opacity-30'>ℹ️ Info</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default TitleContainer