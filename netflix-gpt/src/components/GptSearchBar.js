import React, { useRef } from 'react'
import { OPTIONS, langSet } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/Openai'
import { addGptMovies } from '../utils/GptSlice'

const GptSearchBar = () => {

  const GptSearch = useRef(null);
  const prefferedLang = useSelector(store=> store.lang.language);
  // const addSliceGptMovies = useSelector();
  const dispatch = useDispatch();

  const handleGptSearch = async ()=>{

    console.log(GptSearch.current.value)
       
      const query = "Act as a Movie recommendation system and suggest some movies for the query : "+GptSearch.current.value+
      ". only give me names of 5 movies, comma separated like the example result give ahead. Example: rrr, bahubali, chennaiExpress, kaki, police";
     const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query}],
      model: 'gpt-3.5-turbo',
    });

    console.log(response?.choices[0]?.message?.content.split(','));
    const MovieNames = response?.choices[0]?.message?.content.split(',');
    const GptMovies = (response?.choices[0]?.message?.content).split(',');

    const promiseArray = GptMovies.map((movie)=>getTMDBmovie(movie)); 
    const data = await Promise.all(promiseArray);


    dispatch(addGptMovies({movieNames: MovieNames, movies: data}));
  }

  const getTMDBmovie = async (movie)=>{
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',OPTIONS);
    const data = await response.json();

    return data.results;
  }

  return (

    <div className=' pt-[40%] md:pt-[10%] flex justify-center '>
    <form className='p-1 flex   bg-black  w-full  md:w-[65%]' onSubmit={(e)=> e.preventDefault()}>
        <input 
        ref={GptSearch}
        type='text' className=' w-[80%] my-2 mx-2 bg-slate-200 rounded-sm' placeholder={langSet[prefferedLang]?.GptSearchHolder} style={{ fontSize: '12px' }} md/>
        <button onClick={handleGptSearch} className='py-2 my-2 mx-2 bg-red-700 w-[20%] rounded-sm' >{langSet[prefferedLang]?.searchBtn}</button>
    </form> 
  </div>
  )
}

export default GptSearchBar;