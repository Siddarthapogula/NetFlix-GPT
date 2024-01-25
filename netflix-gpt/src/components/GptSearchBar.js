import React, { useRef, useState } from 'react'
import { OPTIONS, langSet } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/Openai'
import { addGptMovies } from '../utils/GptSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons' 
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const GptSearchBar = () => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();



  const GptSearch = useRef(null);
  const [searchText, setSearchText] = useState("");
  const prefferedLang = useSelector(store=> store.lang.language);
  const [ismic, setMic] = useState(false);
  const dispatch = useDispatch();
  const handleGptSearch = async ()=>{

       
      const query = "Act as a Movie recommendation system and suggest some movies for the query : "+searchText+
      ". only give me names of 5 movies, comma separated like the example result give ahead. Example: rrr, bahubali, chennaiExpress, kaki, police";
     const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query}],
      model: 'gpt-3.5-turbo',
    });

    const MovieNames = response?.choices[0]?.message?.content.split(',');
    const GptMovies = (response?.choices[0]?.message?.content).split(',');

    const promiseArray = GptMovies.map((movie)=>getTMDBmovie(movie)); 
    const data = await Promise.all(promiseArray);


    dispatch(addGptMovies({movieNames: MovieNames, movies: data}));
  }

  const getTMDBmovie = async (movie)=>{
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=true&language=en-US&page=1',OPTIONS);
    const data = await response.json();

    return data.results;
  }

  const micHandle = ()=>{
    if(!browserSupportsSpeechRecognition){
      alert("your browser won't support mic.")
    }
    if(!ismic){
      SpeechRecognition.startListening();
      setSearchText("");
      setMic(true);
    }
    if(ismic){
      SpeechRecognition.stopListening();
      setMic(false);
      setSearchText(transcript);
      
    }
  }

  return (

    <div className='  flex justify-center '>
    <form className='p-1 flex   bg-black w-[65%]' onSubmit={(e)=> e.preventDefault()}>
        <input 
        ref={GptSearch}
        value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        type='text' className=' text-lg w-[80%] my-2 mx-2 bg-slate-200 rounded-sm' placeholder={langSet[prefferedLang]?.GptSearchHolder} style={{ fontSize: '16px' }} md/>
        <button onClick={micHandle} className=' p-3 m-1 rounded-full border border-red-700'><FontAwesomeIcon className=' text-white scale-150' icon={faMicrophone}/></button>
        <button onClick={handleGptSearch} className='py-2 my-2 mx-2 bg-red-700 w-[20%] rounded-sm' >{langSet[prefferedLang]?.searchBtn}</button>
    </form> 
  </div>
  )
}

export default GptSearchBar;