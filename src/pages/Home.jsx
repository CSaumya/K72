import React from 'react'
import Video from '../components/Home/Video'
import Hero_Top from '../components/Home/Home_Top'
import Hero_Bottom from '../components/Home/Home_Bottom'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <Hero_Top />
        <Hero_Bottom />
      </div>
    </div>
  )
}

export default Home
