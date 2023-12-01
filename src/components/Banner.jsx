import React from 'react'
import Logo from '../assets/img/infochalten.avif'

const Banner = () => {
  return (
    <>
    <div className='px-2'>
    <div className='w-full h-auto bg-violet-700 shadow-2xl shadow-orange-500 m-auto p-12'>
    <div className=''>
      <div className='flex items-center justify-center'>
      <div className='border border-pink-400 w-full'></div>
        <img src={Logo} alt="" className='h-36'/><div className='border border-pink-400 w-full'></div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Banner