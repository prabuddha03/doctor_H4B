import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {

  function refreshPage(){
    window.location.reload();
} 
  const [nav, setnav] = useState(true);

  const handlenav = () => {
    setnav(!nav);
  };

  return (
    <div className="text-white flex justify-between item-center h-24 max-w-[1240px] mx-auto px-4 pt-4">
      <img src={logo} alt="logo" className="w-30 h-30" />
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4 cursor-pointer hover:underline">Home</li>
        </Link>
        <li className="p-4 cursor-pointer hover:underline ">Become a Donor</li>
        <Link to="/contact">
          <li className="p-4 cursor-pointer  hover:underline">Contact Us</li>
        </Link>
        <Link to="/about">
          <li className="p-4 cursor-pointer hover:underline">About Us</li>
        </Link>
        <li className="p-4 cursor-pointer hover:underline" onClick={refreshPage}>Logout</li>
        <Link to="/profile"><li className="p-4 cursor-pointer hover:underline">User</li></Link>
      </ul>
      <div onClick={handlenav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-[100%] bg-[#dfdfdfb4] ease-in-out duration-500 "
            : "fixed left-[-100%] "
        }
      >
        <img src={logo} alt="logo" className="m-4 w-30 h-30" />
        <ul className="p-4">
          <Link to="/">
            <li className="p-4 border-b border-gray-600 text-black cursor-pointer hover:underline">
              Home
            </li>
          </Link>
          <li className="p-4 border-b border-gray-600 text-black cursor-pointer hover:underline">
            Become a Donor
          </li>
          <Link to="/contact">
            <li className="p-4 border-b border-gray-600 text-black cursor-pointer hover:underline">
              Contact Us
            </li>
          </Link>
          <Link to="/about">
            <li className="p-4 border-b border-gray-600  text-black cursor-pointer hover:underline">
              About Us
            </li>
          </Link>
          <li className="p-4 border-b border-gray-600  text-black cursor-pointer hover:underline" onClick={refreshPage}>
            Logout
          </li>
          <Link to="/profile"><li className="p-4 border-b border-gray-600  text-black cursor-pointer hover:underline">
           User
          </li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
