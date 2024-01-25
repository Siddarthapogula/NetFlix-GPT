import React, { useEffect, useState } from 'react'
import { OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addTrailerVideo} from "../utils/movieSlice"
import useGetTrailer from '../hooks/useGetTrailer';

const BgVideoContainer = ({movieId}) => {

  const TrailerId = useSelector(store => store?.movie?.trailerVideo?.key);
  useGetTrailer(movieId);
  return (
    <div>
    <div className=' pt-[50%] md:p-0 '>
        <iframe className=' aspect-video w-screen md:scale-150 pointer-events-none'
        src={"https://www.youtube.com/embed/"+ TrailerId +"?autoplay=1&controls=0&mute=1&&loop=1&rel=0"}
         title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default BgVideoContainer