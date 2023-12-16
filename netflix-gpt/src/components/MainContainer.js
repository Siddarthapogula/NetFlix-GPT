import React from 'react'
import TitleContainer from './TitleContainer';
import BgVideoContainer from './BgVideoContainer';
import {useDispatch, useSelector} from "react-redux"


const MainContainer = () => {
  const Movies = useSelector(store => store.movie?.nowPlayingMovies);
  return (
    <div>
        <TitleContainer/>
        <BgVideoContainer movieId = {Movies?.results[0]?.id}/>
    </div>
  )
}

export default MainContainer;

/*
    -title
        -description
        -play 
        -info
    -main contaier video bg
    
*/