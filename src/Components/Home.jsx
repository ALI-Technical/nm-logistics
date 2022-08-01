import React from 'react'
import AboutSection from './About Section/AboutSection';
import Footer from './Footer Section/Footer';
import Map from './Map Section/Map';
import ServiceCard from './Our Service/ServiceCard';
import Slider from './Slider';
const Home = () => {
  return (
    <div className='home-component'>

      <Slider />
      <ServiceCard />
      <AboutSection />
      <Map />
    {/* <Footer /> */}
      {/* <OurServices /> */}
    </div>
  )
}

export default Home
