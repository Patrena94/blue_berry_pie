import React from 'react'

interface Props {
    headingMini: String;
    headingPrimary : String;
}
const Sectionheading = ({headingMini, headingPrimary} : Props) => {
  return (
    <div className="text-center p-2">
    <p className='text-[#670038] md:text-[16px] text-[15px]'>{headingMini}</p>
    <h1 className='mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-[#c299af]'>{headingPrimary}</h1> 
    </div>
  )
}

export default Sectionheading
