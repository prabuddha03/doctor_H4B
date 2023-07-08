import React from "react";
import Profileicon from "../assets/editprofile.png";
import Appoinmentimg from "../assets/appointmentimg.png";
import Prescription from "../assets/e-book.svg";
import Blood from "../assets/blood.png";
import Logout from "../assets/logout.png";

const ProfileSidebar = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-block drawer-button lg:hidden"
          >
            Patient Details
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content py-10">
            {/* Sidebar content here */}
            <li className="bg-[#3fb8d3] rounded-xl p-3 text-2xl text-[#2C444A] font-bold hover:bg-[#2B9DC1] my-4">
              <a>
                <img src={Profileicon} alt="icon" className="mr-2" />
                Your Profile
              </a>
            </li>
            <li className="bg-[#3fb8d3] rounded-xl p-3 text-2xl text-[#2C444A] font-bold hover:bg-[#2B9DC1] my-4 ">
              <a>
                <img src={Appoinmentimg} alt="icon" className="mr-2" />
                Appoinments
              </a>
            </li>
            <li className="bg-[#3fb8d3] rounded-xl p-3 text-2xl text-[#2C444A] font-bold hover:bg-[#2B9DC1] my-4 ">
              <a>
                <img src={Prescription} alt="icon" className="mr-2" />
                Eprescription
              </a>
            </li>
            <li className="bg-[#ba1919] rounded-xl p-3 text-2xl text-[#ffffff] font-bold hover:bg-[#C12B2B] my-4">
              <a>
                <img src={Blood} alt="icon" className="mr-2" />
                Blood Mate
              </a>
            </li>
            <li className="bg-[#3fb8d3] rounded-xl p-3 text-2xl text-[#2C444A] font-bold hover:bg-[#2B9DC1]  my-7">
              <a>
                <img src={Logout} alt="icon" className="mr-2" />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
