

import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
        OPTIONS
      );
      const data = await response.json();
      const filteredData = data?.results.filter(
        (movie) => movie.type === "Trailer" || movie.type === "clip"
      );
      const trailer = filteredData?.length ? filteredData[0] : null;

      // Check if trailer exists before dispatching
      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };
  useEffect(() => {
     getMovieTrailer()
  }, [movieId, dispatch]); // Include movieId and dispatch in the dependency array

  // You might also want to return some value or use the data in your component
  return null;
};

export default useGetTrailer;
