import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useGetMovies = ()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async ()=>{
      const response =  await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data));
      
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
  
};

export default useGetMovies;