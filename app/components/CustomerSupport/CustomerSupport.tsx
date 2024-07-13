import Image from 'next/image'
import React from 'react'
import SupportImg from "@/public/2V0A4605.jpg"
import {CheckIcon } from '@heroicons/react/16/solid'

const CustomerSupport = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto grid-grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center'>
            <div className='order-2 lg:order-1'>
                <Image src={SupportImg} alt="support" width={200} height={200} priority border-rounded  />
            </div>
            <div className='order-1 lg:order-2'>
                <h1 className='text-[20px] md:text-[25px] lg:text-[28] text-[#670038] font-bold leading-[2rem] md:leading-[3rem]'>
                MEET YOUR REAL ESTATE CONSULTANT
                </h1>
                <p className='mt-[1.5rem] mb-[1.5 rem] text-black opacity-90 text-[15px] md:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-300' />
                    <p className='text-[17px] text- [#670038] font-[500}'>Medical and vision</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-300' />
                    <p className='text-[17px] text- [#670038] font-[500}'>Life Insurance</p>
                </div>
                <div className='flex items-center mb-[1rem] space-x-3'>
                    <CheckIcon className='w-[1.3rem] h-[1.3rem] text-red-300' />
                    <p className='text-[17px] text- [#670038] font-[500}'>402K</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CustomerSupport
