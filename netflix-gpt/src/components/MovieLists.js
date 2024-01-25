import React from 'react'
import MovieCards from './MovieCards'
import { useDispatch, useSelector } from 'react-redux';

const MovieLists = ({title, movies}) => {
    const Movies = movies;

  return Movies && (
    <div className='p-6'>
    <div className='py-4 px-2 font-semibold text-2xl text-white '><h1>{title}</h1></div>
    <div className=' flex  overflow-x-auto over'>
        <div className='flex'>{Movies.map((movie)=> <MovieCards key={movie?.id} poster= {movie?.poster_path} />)}</div>
    </div>
    </div>
  )
}

export default MovieLists