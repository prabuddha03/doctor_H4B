import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="w-full p-20 px-5">
    <div className="max-w-[1800px] mx-auto grid md:grid-cols-2">
     <div className="flex flex-col justify-center px-20">
       <p className="text-8xl font-bold pt-5 text-[#cccccc]">Every Day</p>
       <p className="text-7xl font-bold pt-4 text-[#a72121]">Almost 12,000</p>
       <p className="text-8xl font-bold pt-4 text-[#cccccc]">People Die</p>
       <p className="text-4xl pt-4 text-[#d43f3f]">due to unavailability of blood </p>
       <div className="flex pt-12">
       <Link to="/blood"><button className="btn btn-outline w-[600px]">Find yourself a Blood Donor</button></Link>
       <button className="btn btn-info mx-10 w-[200px]">explore</button>
       </div>
       
     </div>
    </div>
      
    </div>
  );
};

export default Hero;
