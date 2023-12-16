import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {

  const allowGpt = useSelector(store => store.gpt.ShowGpt);

  return (
    <div>
    <Header/>
    {allowGpt? <GptSearch/>:
    <>
     <MainContainer/>
      <SecondContainer/>
    </>
     }
    
   
    </div>
  )
}

export default Browse