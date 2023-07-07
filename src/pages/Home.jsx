import React from "react";
import Navbar from "../components/Navbar";
import heroimg from "../assets/home.png";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
const Home = () => {
  const heroimageStyle = {
    backgroundImage: `url(${heroimg})`,
  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen bg-no-repeat"
        style={heroimageStyle}
      >
        <Navbar />
        <Hero />
      </div>

      <div className="bg-white grid h-auto place-items-center sm:place-items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <Testimonial topHeading="CURRENTLY" middleText="1,279" bottomHeading="WILLING TO DONATE BLOOD" />
          <Testimonial topHeading="CURRENTLY" middleText="12,549" bottomHeading="PEOPLE HAVE REGISTERED"/>
          <Testimonial topHeading="CURRENTLY" middleText="6,573" bottomHeading="GONE THROUGH TEST" />
        </div>
      </div>
    </div>
  );
};

export default Home;
