import React from 'react';
import Navbar from '../components/Navbar';
import heroimg from '../assets/home.png';
import Hero from "../components/Hero";

const Home = () => {
 
    const heroimageStyle = {
        backgroundImage: `url(${heroimg})`,
      };
    

  return (
    <div>
    <div className='bg-cover bg-center h-screen bg-no-repeat' style={heroimageStyle}>
    <Navbar/>
    <Hero />
    </div>
      
    </div>
  )
}

export default Home
