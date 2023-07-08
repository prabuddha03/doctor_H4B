import React from "react";
import Pill from '../assets/pill.png'

const MedicineDashboard = () => {
  return (
    <div className="bg-[#E6F4F1] h-[320px] w-[540px] rounded-lg shadow-md">
      <div className="flex gap-52 p-5">
        <p className="text-2xl font-bold text-cyan-600">Medications</p>
        <button className="btn btn-outline w-[100px]">Month</button>
      </div>
      <div className="grid grid-cols-2 gap-4 content-start px-2.5">
        <div className="bg-[#F4FAF9] rounded-md shadow-lg h-10  pt-1 pl-4 flex gap-10"><img src={Pill} alt="pill"/><p className=" font-semibold  text-cyan-600">Azithral</p></div>
        <div className="bg-[#F4FAF9] rounded-md shadow-lg h-10"><p className="font-medium text-1xl text-black px-3">Once before meal</p></div>
        <div className="bg-[#F4FAF9] rounded-md shadow-lg h-10  pt-1 pl-4 flex gap-10"><img src={Pill} alt="pill"/><p className=" font-semibold  text-cyan-600">Azithral</p></div>
        <div className="bg-[#F4FAF9] rounded-md shadow-lg h-10"><p className="font-medium text-1xl text-black px-3">Once before meal</p></div>
        <div className="bg-[#F4FAF9] rounded-md shadow-lg h-10  pt-1 pl-4 flex gap-10"><img src={Pill} alt="pill"/><p className=" font-semibold  text-cyan-600">Azithral</p></div>
        <div className="bg-[#F4FAF9] rounded-md shadow-lg h-10"><p className="font-medium text-1xl text-black px-3">Once before meal</p></div>
        <div className="bg-[#F4FAF9] rounded-md shadow-lg h-10  pt-1 pl-4 flex gap-10"><img src={Pill} alt="pill"/><p className=" font-semibold  text-cyan-600">Azithral</p></div>
        <div className="bg-[#F4FAF9] rounded-md shadow-lg h-10"><p className="font-medium text-1xl text-black px-3">Once before meal</p></div>
      </div>
    </div>
  );
  }
export default MedicineDashboard;
