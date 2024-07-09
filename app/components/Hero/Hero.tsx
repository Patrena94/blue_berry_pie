import React from 'react'
import {FaXTwitter,FaInstagram  } from "react-icons/fa6"
import {CiFacebook, CiLinkedin} from "react-icons/ci"
import ProfileImg from "@/public/2V0A4605.jpg";
// import ProfileImg from "../image/2VOA4605.jpg";
import Image from 'next/image';

// interface Props{
//     Image: () => ProfileImg;
// }

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center ">
        <div className="relative grid grid-cols-1 1lg:grid-cols-5 items-center w-[80%] mx-auto">
<div className="col-span-2 hidden sm:block">
    <Image src={ProfileImg} alt="Profile Picture" width={200} height={200} priority border-rounded /> 
{/* <Image src={ProfileImg} alt="Profile Picture"  /> */}
</div>
<div className="col-span-3">
    <h1 className="text-[27px] md:text-[35px] 1lg:text-[40px] mb-[1rem] font-bold text-[#670038]">
        MEET YOUR REAL ESTATE CONSULTANT
    </h1>
    <h2>Patrena A. Smith</h2>
    <p className="md:text-[16px] text-[14px] mb-[2rem] text-black opacity-90 font-[400]">Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Soluta expedita dolores ea nisi tempora? Animi facilis illo earum in ea. Provident architecto quo saepe facilis odit obcaecati repellat, quis dicta. </p>
    <div className="flex items-center space-x-4 md: space-x-6">
        <ul><li>(860)943-3172</li>
        <li>patrena@patrenasmith.com</li>
        <li>Berkshire Hathaway HomeSeriveces | New England Properties </li>
        <li>2790 Main Street</li>
        <li>Glastonbury, CT 06108</li>
        </ul>
        </div>
        <br />
        <div className="flex items-center space-x-4 md: space-x-6">        
       <ul> <FaInstagram /> </ul>
             <ul><CiFacebook /></ul>
             <ul><CiLinkedin /></ul>
             <ul><FaXTwitter /></ul>
        <div>
       
             </div>
    </div>
</div>
        </div>
      
    </div>
  )
}

export default Hero
