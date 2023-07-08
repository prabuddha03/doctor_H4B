import React from "react";
import Profile from "../assets/personal.png";
import Edit from "../assets/pen.png";

const UserInformation = () => {
  return (
    <div className="w-[400px] h-[460px] bg-[#fff] rounded-lg shadow-md">
      <div className="flex w-full">
        <div className="w-full bg-cyan-400 h-16 flex">
          <img src={Profile} alt="pic" className="w-10 h-10 m-2" />
          <p className="text-white font-bold text-2xl py-3">
            Personal Information
          </p>
          <img src={Edit} alt="edit" className="w-9 h-9 mx-6 mt-3" />
        </div>
      </div>
      <div className="flex justify-center align-middle py-4">
         <ul className="font-bold text-black">
            <li><p className="text-2xl">Name: <span></span> </p></li>
            <li><p className="text-2xl">Gender: <span></span> </p></li>
            <li><p className="text-2xl">Age: <span></span> </p></li>
            <li><p className="text-2xl">Height: <span></span> </p></li>
            <li><p className="text-2xl">Weight: <span></span> </p></li>
            <li><p className="text-2xl">BMI: <span></span> </p></li>
         </ul>
      </div>
    </div>
  );
};

export default UserInformation;
