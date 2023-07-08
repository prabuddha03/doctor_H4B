import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppoinmentBooking from "./pages/AppoinmentBooking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KnowMedicine from "./pages/KnowMedicine";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="AppoinmentBooking" element={<AppoinmentBooking />} />
        <Route path="knowmedicine" element={<KnowMedicine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
