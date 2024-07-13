import React from 'react'
import DesignImg from '@/public/Design.png'
import Image from 'next/image'



const Footer = () => {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
        <div className='w-[90%] mx-auto grid grid-cols-1 border-b-[1.5px]  border-b-slate-300 pb-[2rem] md:grid-cols-3 1g:grid-cols-3 
        xl:rgid-cols-3 gap-[2rem] items-start'>
            <div className='md:mx-auto mx-0'>
                <div className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>
                <Image src={DesignImg} alt="Profile Picture" width={70} height={70} className='mx-auto' /> 
                </div>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Berkshire Hathaway HomeServices | New England Properties</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>2790 Main street </p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Glastonbury, CT 06033 </p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Connecticut License:</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Massachusetts License: 1002286</p>
            </div>
            <div className='md:mx-auto mx-0'>
                <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>Company</h1>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>About</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Buy</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Sell</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Market Report</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Blog</p>
            </div>
            <div className='md:mx-auto mx-0'>
                <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem] '>Company</h1>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Facebook</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Instagram</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Linkedin</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>X</p>
                <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600'>Blog</p>
            </div>
        </div>
      <div className='w-[80%] mx-auto text-center text-[15px] mt-[1rem] opacity-75'>Copyright © 2024 by Patrena Smith</div>
    </div>
  )
}

export default Footer
