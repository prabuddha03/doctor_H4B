import React from "react";
import { Link } from "react-router-dom";
import NavbarSec from "../components/NavbarSec";
import ProfileSidebar from "../components/ProfileSidebar";
import MedicineDashboard from "../components/MedicineDashboard";
import ProfileBanner from '../assets/ProfileBanner.png';
import UserInformation from "../components/UserInformation";
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div className="bg-[#b3e9f3ce] h-auto">
      <NavbarSec />
      <div className="">
        <div className="flex md:flex sm:flex-col">
          <div className="h-auto">
            <div className="absolute top-32 left-1/3">
            
            <div className="flex gap-4 absolute py-5" ><p className="text-2xl font-medium">Welcome,</p><p className="text-3xl font-semibold text-cyan-600">Mark Zuck</p></div>
            <img src={ProfileBanner} alt="banner" className="py-5" />
            <div className="flex gap-5">
            <MedicineDashboard />
              <UserInformation />
            </div>
            </div>
            <ProfileSidebar />
            <button className="btn btn-info w-[200px] absolute top-[90%] right-[54%]">Take the test</button>
            <Link to="/AppoinmentBooking"><button className="btn btn-info bg-cyan-500 w-[200px] cursor-pointer">Book an appoinment</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
