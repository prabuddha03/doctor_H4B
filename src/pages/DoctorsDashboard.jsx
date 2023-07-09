import React from "react";
import NavbarSec from "../components/NavbarSec";
import Footer from "../components/Footer";
import PatientFormData from "../components/PatientFormData";
import UserInformation from "../components/UserInformation";
import PatientCard from "../components/PatientCard";

const DoctorsDashboard = () => {
  return (
    <div className="bg-[#acdddf] h-auto">
      <NavbarSec />
      <div className="grid h-auto place-items-center sm:place-items-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <PatientFormData />
          <div className="h-auto w-auto">
            <div className="grid grid-cols-4 gap-5">
              <PatientCard name="Asim Paul" />
              <PatientCard name="Praditi Roy" />
              <PatientCard name="Riya Raktim" />
              <PatientCard name="Anup Raha" />
            </div>

            <div className="absolute top-[40%] left-[45%]">
              <UserInformation />
            </div>
            <div>
              <button className="btn btn-info absolute right-[7%] top-[40%] text-white font-semibold w-[300px]">
                Generate Prescription
              </button>
              <button className="btn btn-info absolute right-[7%] top-[50%] text-white font-semibold w-[300px]">
                Medication Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsDashboard;
