import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'

const SecondContainer = () => {

  const movies = useSelector(store => store?.movie);
  return (
    <div className=''>
      <div className=' pt-[50%]  md:p-0 '>
      <div className=' -mt-36 relative text-white'>
      <MovieLists title = {"Now Playing"} movies = {movies?.nowPlayingMovies?.results}/>
      <MovieLists title = {"Trending"} movies = {movies?.TopRatedMovies?.results} />
      <MovieLists title = {"Popular"} movies = {movies?.PopularMovies?.results}/>
      <MovieLists title = {"Up Comming"} movies = {movies?.UpCommingMovies?.results} />
      </div>
      </div>

    </div>
  )
}
export default SecondContainer