import React from 'react'
import teamsbg from "./assets/IATA-2.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
          <div className="relative">
    <div className="absolute object-cover w-full h-screen">
      <img src={teamsbg} alt="" className="object-cover absolute w-full h-screen" />
      <div className="flex flex-col gap-2 items-center justify-center px-2 h-full text-white">
        <h4 className="text-white text-center z-10 text-[30px] md:text-[40px] font-[600]">We are Rebranding</h4>
        <h4 className="text-white z-10 text-center text-[22px] md:text-[32px] font-[400]">To get to know more Information about us</h4>
      <Link to='/waitlist' className='px-10 z-10 bg-amber-800 py-3  rounded-lg text-white text-md'>
<h4>Click here </h4>
      </Link>
      </div>
      <div className="overlay absolute inset-0 bg-black opacity-70"></div>
    </div>
  </div>
    </div>
  )
}

export default Home
