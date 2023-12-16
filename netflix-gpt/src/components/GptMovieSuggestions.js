import React from 'react'
import MovieLists from  './MovieLists'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {
  const {GptMovieNames,GptSuggestedMovies } = useSelector(store =>  store?.gpt)
  
  if(!GptMovieNames)return null;
  // console.log(movies?.GptMovieNames[1]);

  return (
    <div className='   z-10 text-white bg-black mt-10 opacity-90'>
      {GptMovieNames.map((movie, index)=><MovieLists title ={GptMovieNames[index]} movies={GptSuggestedMovies[index] }/>)}
    </div>
  )
}

export default GptMovieSuggestions