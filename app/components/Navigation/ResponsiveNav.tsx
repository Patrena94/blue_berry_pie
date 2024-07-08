"use client";
import React from 'react'
import MobileNavigation from './MobileNavigation'
import Nav from './Nav'
import { useState } from 'react'


const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler =()=> setShowNav(true);
    const closeNavHandler =() =>setShowNav(false);
  return (
    <div>
     <Nav openNav={showNavHandler} />
     <MobileNavigation nav={showNav} closeNav={closeNavHandler} /> 
    </div>
  )
}

export default ResponsiveNav

