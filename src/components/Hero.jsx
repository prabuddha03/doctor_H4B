import React from "react";


const Hero = () => {
  return (
    <div className="w-full p-16 px-5">
    <div className="max-w-[1640px] mx-auto grid md:grid-cols-2">
     <div className="flex flex-col justify-center">
       <p className="text-8xl font-bold pt-20 text-[#cccccc]">Every Day</p>
       <p className="text-8xl font-bold pt-4 text-[#a72121]">Almost 12,000</p>
       <p className="text-8xl font-bold pt-4 text-[#cccccc]">People Die</p>
       <p className="text-4xl pt-4 text-[#d43f3f]">due to unavailability of blood </p>
       <div className="flex pt-10">
       <button className="btn btn-outline w-[600px]">Find yourself a Blood Donor</button>
       <button className="btn btn-info mx-10 w-[200px]">explore</button>
       </div>
       
     </div>
    </div>
      
    </div>
  );
};

export default Hero;
