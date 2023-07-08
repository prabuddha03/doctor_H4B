import React from "react";
import NavbarSec from "../components/NavbarSec";
import Footer from "../components/Footer";
import AppoinmentFormOne from "../components/AppoinmentFormOne";
import AppoinmentFormTwo from "../components/AppoinmentFormTwo";

const AppoinmentBooking = () => {
  return (
    <div className="bg-[#acdddf] h-auto">
      <NavbarSec />
      <div className="grid h-auto place-items-center sm:place-items-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AppoinmentFormOne />
          <AppoinmentFormTwo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppoinmentBooking;
