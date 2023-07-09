import React, { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AppoinmentBooking from "./pages/AppoinmentBooking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KnowMedicine from "./pages/KnowMedicine";
import DoctorsDashboard from "./pages/DoctorsDashboard";
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/ContactUs';
import Chatbot from "./pages/Chatbot";
import BloodDonation from "./pages/BloodDonation";
import Register from "./pages/Register";
import Login from './components/login/Login';
import useToken from "./components/useToken";

const App = () => {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/AppoinmentBooking" element={<AppoinmentBooking />} />
        <Route path="/knowmedicine" element={<KnowMedicine />} />
        <Route path="/docdashboard" element={<DoctorsDashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs /> } />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/blood" element={<BloodDonation />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
