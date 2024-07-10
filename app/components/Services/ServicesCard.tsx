import Image from 'next/image';
import React from 'react'

interface Props {
    image:string;
    title:string;
}

const ServicesCard = ({title, image} : Props) => {
  return (
    <div className='text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 curser-pointer hover:scale-105'>
      <Image src={image} alt="services" width={70} height={70} className='mx-auto' />
      <h1 className='text-{20px] mt-[1.4rem] font-[500] text-[#670038]'>{title}</h1>
      <p className='mt-[1rem] text-[#c99fa] opacity-90 text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tempora fugit dolorum ut error tenetur itaque beatae sapiente deserunt voluptates. Sapiente blanditiis consequatur, quam error facilis doloribus saepe dignissimos ab?</p>
    <p className='mt-[1.4rem] text-[#670038] font-[500] cursor-pointer hover: text--[#670038]-800'>Explore</p>
    </div>
  )
}

export default ServicesCard
