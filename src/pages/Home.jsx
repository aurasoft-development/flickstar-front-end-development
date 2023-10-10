import React from 'react'
import '../assets/css/Home.css'
import SectionOne from '../component/home/SectionOne'
import SectionSec from '../component/home/SectionSec'
import SectionThree from '../component/home/SectionThree'
import SectionFour from '../component/home/SectionFour'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div className='home_container'>
    <SectionOne />
    <SectionSec />
    <SectionThree />
    <SectionFour />
    <Footer />
    </div>
  )
}

export default Home