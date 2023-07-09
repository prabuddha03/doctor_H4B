import React from "react";
import { Link } from "react-router-dom";
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
import TestBg from "../assets/onlinetestbg.png";
import HeadingText from "../components/HeadingText";
import ListText from "../components/ListText";
import Questions from "../components/Questions";

const Home = () => {
  const heroimageStyle = {
    backgroundImage: `url(${heroimg})`,
  };
  const TestBgStyle = {
    backgroundImage: `url(${TestBg})`,
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
      <div className="bg-gradient-to-b from-cyan-500 to-white-200 h-auto ">
        <HeadingText text="We Help You And Your Loved Ones Stay Healthy" />
        <div className="grid h-auto place-items-center sm:place-items-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <Link to="/chat">
            <ApoinmentCard
              imgUrl={Chatbot}
              heading="Talk To Our Bot"
              text="Having a bad day or not feeling well? Our virtual friend is always there for you to listen and understand everything"
            />
            </Link>
            <Link to="/knowmedicine">
              <ApoinmentCard
                imgUrl={Medicine}
                heading="Know Your Med"
                text="Know about everything before going to choose a medicine. Side effects, benefits and even timings just a click away "
              />
            </Link>

            <Link to="/AppoinmentBooking">
              <ApoinmentCard
                imgUrl={Appoinment}
                heading="Book Your Visit"
                text="Select a date flexible to your schedule and set an appointment with your doctor."
              />
            </Link>

            <ApoinmentCard
              imgUrl={Prescription}
              heading="Get Easy Cure"
              text="Get your prescription instantly without any hassle, anytime anywhere"
            />
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center h-screen bg-no-repeat"
        style={TestBgStyle}
      >
        <HeadingText text="We Help You And Your Loved Ones Stay Healthy ?" />
        <ListText />
        <div className="grid place-content-center">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-cyan-700 border-zinc-100 w-[350px]">
            Take a Quick assesment
          </button>
        </div>
      </div>

      <div className="h-[100px]"></div>

      <div className=" h-screen bg-">
        <HeadingText text="Frequently Asked Questions" />
        <Questions />
      </div>

      <div className="h-[100px]"></div>

      <Footer />
    </div>
  );
};

export default Home;
