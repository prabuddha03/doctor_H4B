import React from "react";
import Navbarsec from "../components/NavbarSec";
import Footer from "../components/Footer";
import DonerCard from "../components/DonerCard";
import donorlist from "../constants/main";

const BloodDonation = () => {
  function createEntry(donorlist) {
    return (
      <DonerCard
        key={donorlist.id}
        name={donorlist.name}
        address={donorlist.address}
        bloodgroup={donorlist.bloodgroup}
        contact={donorlist.contact}
      />
    );
  }
  return (
    <div className="bg-[#acdddf] h-auto">
      <Navbarsec />
      <div className="flex justify-between py-16">
        <button className="btn btn-info mx-10 w-[200px]">Ask For Blood</button>
        <button className="btn btn-info mx-10 w-[200px]">Donate Blood</button>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#7ACCF1] w-[95%] h-[150px] rounded-lg shadow-md">
          <div className="flex justify-between">
            <div>
              <p className="py-4 px-8 text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <p className="px-8 text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <div className="p-7">
              <button className="btn btn-active btn-accent">
                Instant Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#FF0202] shadow-lg text-4xl font-bold p-9">
        List Of Blood Donors
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-6 w-[50%]">{donorlist.map(createEntry)}</div>
      </div>
      <Footer />
    </div>
  );
};

export default BloodDonation;
