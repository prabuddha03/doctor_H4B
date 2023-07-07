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
      <div className="bg-[#00A8D0]">
        <p className="text-6xl font-medium w-1/2 relative left-48 text-white pt-10">
          We Help You and Your Loved Ones Stay Healthy
        </p>
        <div className="grid h-auto place-items-center sm:place-items-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <ApoinmentCard
              imgUrl={Chatbot}
              heading="Talk To Our Bot"
              text="Having a bad day or not feeling well? Our virtual friend is always there for you to listen and understand everything"
            />
            <ApoinmentCard
              imgUrl={Medicine}
              heading="Know Your Med"
              text="Know about everything before going to choose a medicine. Side effects, benefits and even timings just a click away "
            />
            <ApoinmentCard
              imgUrl={Appoinment}
              heading="Book Your Visit"
              text="Select a date flexible to your schedule and set an appointment with your doctor."
            />
            <ApoinmentCard
              imgUrl={Prescription}
              heading="Get Easy Cure"
              text="Get your prescription instantly without any hassle, anytime anywhere"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
