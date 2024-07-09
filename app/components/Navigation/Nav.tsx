import React from 'react'
import Link from "next/link";
// import { Bars3BottomRightIcon } from '@heroicons/react/16/solid';
import logo1 from "./images/logos/logo1.png"
import logo2 from "./images/logos/logo1.png"
import { GiHamburgerMenu } from "react-icons/gi";
interface Props{
  openNav: () => void;
}
// import Image from "./images/logos";

const Nav = ({openNav}:Props) => {
  return (
    <div className="h-[12vh] bg-white shadow-md">
      <div className="w-[85%] flex items-center justify-between max-auto h-[12vh]">
      {/* <Image   src="/logo1"
      width={1000}
      height={760}
      className="hidden md:block"
      alt="Screenshots of the dashboard project showing desktop version" />
        <Image   src="/logo2.png"
      width={1000}
      height={760}
      className="hidden md:block"
      alt="Screenshots of the dashboard project showing desktop version" /> */}

        <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
          <span className="text-[27px] md:text-[40px] text-[#670038]-600">W</span>
          ebdev.
        </h1>
        <ul className="1g:flex items-center space-x-10">
          <li className="text-[17px] cursor-pointer text-[#670038]-500">
<Link href="/">Home</Link>
</li>
</ul>
<ul>
<li className="text-[17px] cursor-pointer hover:text-[#670038]-500 transition-all duration-200">
<Link  href="/about">About</Link>
          </li>
          </ul>
<ul>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
<Link  href="/buy">Buy</Link>
          </li>
          </ul>
          <ul>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
<Link  href="/sell">Sell</Link>
          </li>
          </ul>
          <ul>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
<Link  href="/market">Market</Link>
          </li>
          </ul>
          <ul>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
<Link  href="/blog">Blog</Link>
          </li> 
          </ul>
          <div className="flex items-center space-x-2 md: space-x-5">
          <ul>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
<Link  href="/profile">Register</Link>
          </li>
          </ul>
          <ul>
          <li className="text-[17px] cursor-pointer hover:text-red-500 transition-all duration-200">
<Link  href="/signin">Sign In</Link>
          </li> 
          </ul>
          <div className="flex items-center space-x-2 md:space-x-5">
            <GiHamburgerMenu onClick={openNav} className='w-[1.5] lg:hidden h-[1.5] text-slate-900 cursor-pointer' />
            </div> 
      </div>        
    </div>
    </div>
  );
};

export default Nav
