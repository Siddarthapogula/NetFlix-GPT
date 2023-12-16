import { useDispatch, useSelector } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useGetPopularMovies = ()=>{

     const PopularMovies = useSelector(store => store.movie.PopularMovies);
    const dispatch = useDispatch();
    const getPopularMovies = async ()=>{
      const response =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', OPTIONS);
      const data = await response.json();
      dispatch(addPopularMovies(data));
    }
    useEffect(()=>{
      !PopularMovies && getPopularMovies();
    },[])
  
};

export default useGetPopularMovies;