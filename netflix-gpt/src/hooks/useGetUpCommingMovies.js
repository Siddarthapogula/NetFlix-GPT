import { useDispatch, useSelector } from "react-redux";
import {  addUpCommingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useGetUpCommingMovies = ()=>{
  const upCommingMovies = useSelector(store=> store.movie.UpCommingMovies)
    const dispatch = useDispatch();
    const getUpCommingMovies = async ()=>{
      const response =  await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', OPTIONS);
      const data = await response.json();
      dispatch(addUpCommingMovies(data));
    }
    useEffect(()=>{
      !upCommingMovies && getUpCommingMovies();
    },[])
  
};

export default useGetUpCommingMovies;