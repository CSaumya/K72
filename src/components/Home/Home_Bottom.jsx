import React from 'react'
import { Link } from 'react-router-dom'

const Home_Bottom = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 md:gap-6 flex-wrap'>

      <Link
        to='/projects'
        className='
        border-2 border-white
        hover:border-[#D3FD50] hover:text-[#D3FD50]
        rounded-full uppercase
        px-4 py-1
        md:px-5 md:py-2
        text-[6vw] sm:text-[5vw] md:text-[3vw] lg:text-[2vw]
        transition-all duration-300
        '
      >
        Projects
      </Link>

      <Link
        to='/agence'
        className='
        border-2 border-white
        hover:border-[#D3FD50] hover:text-[#D3FD50]
        rounded-full uppercase
        px-4 py-1
        md:px-5 md:py-2
        text-[6vw] sm:text-[5vw] md:text-[3vw] lg:text-[2vw]
        transition-all duration-300
        '
      >
        Agence
      </Link>

    </div>
  )
}

export default Home_Bottom