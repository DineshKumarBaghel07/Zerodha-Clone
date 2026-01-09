import React from 'react'
import HeroSection from './HeroSection'
import Stats from "./Stats"
import Awards from "./Awards"
import Pricing from "./Pricing"
import Eduction from './Education'
import OpenAccount from '../comman/OpenAccount'
import Navbar from '../comman/Navbar'
import Footer from '../comman/Footer'




const HomePage = () =>{
return (<>
<div className='flex flex-col'>
<HeroSection />
<Stats/>
<Pricing/>
<Eduction/>
<OpenAccount/>
</div>

</>);
}

export default HomePage;