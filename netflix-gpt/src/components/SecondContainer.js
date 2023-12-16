import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'

const SecondContainer = () => {

  const movies = useSelector(store => store?.movie);
  return (
    <div className=' bg-black'>
      <div className=' -mt-36 relative text-white'>
      <MovieLists title = {"Now Playing"} movies = {movies?.nowPlayingMovies?.results}/>
      <MovieLists title = {"Trending"} movies = {movies?.TopRatedMovies?.results} />
      <MovieLists title = {"Popular"} movies = {movies?.PopularMovies?.results}/>
      <MovieLists title = {"Up Comming"} movies = {movies?.UpCommingMovies?.results} />
      </div>

    </div>
  )
}

/**
 *  second container 
 *    - movies list
 *        - horizontal * n scrolls
 *        - movie card 
 */
export default SecondContainer