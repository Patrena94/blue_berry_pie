import React from 'react'
// import { XMarkIcon } from '@heroicons/react/16/solid'
import { IoCloseCircleSharp } from "react-icons/io5";
import Link from 'next/link'

interface Props{
    nav: boolean;
    closeNav: () => void;
}

const MobileNavigation = ({nav, closeNav}:Props) => {
    const navOpenStyle = nav? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className={`transform transition-all ${navOpenStyle} duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-[0] bg-white`}>
  <IoCloseCircleSharp onClick={closeNav} className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]" />
  <ul className="relative z-[201] space-y-10 flex flex-col justify-center h-[100%]">
          <li className="text-[25px] cursor-pointer text-[#670038] hoover:text-[#72595e]-500 transition-all duration-200">
<Link href="/">Home</Link>
</li>

<li className="text-[25px] cursor-pointer text-[#670038]-400 hover:text-[#72595e]-500 transition-all duration-200">
<Link  href="/about">About</Link>
          </li>
          <li className="text-[25px] cursor-pointer text-[#670038] hover:text-[#72595e]-500 transition-all duration-200">
<Link  href="/buy">Buy</Link>
          </li>
          <li className="text-[25px] cursor-pointer text-[#670038]  hover:text-[#72595e]-500 transition-all duration-200">
<Link  href="/sell">Sell</Link>
          </li>
          <li className="text-[25px] cursor-pointer text-[#670038] hover:text-[#72595e]-500 transition-all duration-200">
<Link  href="/market">Market</Link>
          </li>
          <li className="text-[25px] cursor-pointer text-[#670038] hover:text-[#72595e]-500 transition-all duration-200">
<Link  href="/blog">Blog</Link>
          </li> 
          <li className="text-[25px] cursor-pointer text-[#670038] hover:text-[#72595e]-500 transition-all duration-200">
<Link  href="/profile">Register</Link>
          </li>
          <li className="text-[25px] cursor-pointer text-[#670038] hover:text-[#72595e]-500 transition-all duration-200">
<Link  href="/signin">Sign In</Link>
          </li> 
          </ul>
    </div>
  )
}

export default MobileNavigation