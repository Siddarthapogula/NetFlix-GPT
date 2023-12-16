import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {

  const allowGpt = useSelector(store => store.gpt.ShowGpt);

  return (
    <div className='bg-black'>
    <Header/>
    {allowGpt? <GptSearch/>:
    <div className="">
      <div>
      <MainContainer/>
    <SecondContainer/>
      </div>
    
    </div>
     }
    </div>
  )
}

export default Browse