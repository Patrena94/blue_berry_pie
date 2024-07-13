import React from 'react'
import Sectionheading from '../SectionHeading/Sectionheading'
import ServicesCard from './ServicesCard'
import Design from '@/public/Design1.png'
import Design1 from '@/public/Design.png'
import Design2 from "@/public/Design2.png"

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3]">
        <Sectionheading headingMini="Services Provided"  headingPrimary="Explore Services" />
    <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md: grid-cols-2 lg:grid-cols3 items-center gap-[1.4rem]'>
        <div>
        <ServicesCard  title="Buyer" image={Design.src} />
        </div>
        <div>
        <ServicesCard  title="Seller" image={Design1.src} />
        </div>
        <div>
        <ServicesCard  title="Renter" image={Design2.src} />
        </div>
        <div>
        <ServicesCard  title="Investor" image={Design.src} />
        </div>
        <div>
        <ServicesCard  title="Commerical" image={Design.src} />
        </div>
        <div>
        <ServicesCard  title="Buyer" image={Design.src} />
        </div>
        </div>  
    </div>
  )
}

export default Services
