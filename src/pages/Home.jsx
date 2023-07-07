import React from "react";
import Navbar from "../components/Navbar";
import heroimg from "../assets/home.png";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import ApoinmentCard from "../components/ApoinmentCard";
import Medicine from "../assets/medicine.png";
import Chatbot from "../assets/chatbotsign.png";
import Prescription from "../assets/prescriptions.png";
import Appoinment from "../assets/appointment.png";

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
          <Testimonial
            topHeading="CURRENTLY"
            middleText="1,279"
            bottomHeading="WILLING TO DONATE BLOOD"
          />
          <Testimonial
            topHeading="CURRENTLY"
            middleText="12,549"
            bottomHeading="PEOPLE HAVE REGISTERED"
          />
          <Testimonial
            topHeading="CURRENTLY"
            middleText="6,573"
            bottomHeading="GONE THROUGH TEST"
          />
        </div>
      </div>

      <div className="grid h-auto place-items-center sm:place-items-center py-20 bg-[#00A8D0]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <ApoinmentCard />
          <ApoinmentCard />
          <ApoinmentCard />
          <ApoinmentCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
