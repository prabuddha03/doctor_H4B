import React from 'react';
import Cardiologist from '../assets/cardiologist.png';
import Dentist from '../assets/dentist.png';
import Opthalmologist from '../assets/opthalmologist.png';
import Psycologist from '../assets/psycologist.png';
import { useState } from "react";


const AppoinmentFormTwo = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    <div className="h-[644px] w-[720px] bg-[#EEFBF7] rounded-md shadow-md">
    <p className='text-2xl font-bold text-cyan-500 m-6'>Select Category</p>
      <div className='grid h-auto place-items-center sm:place-items-center cursor-pointer'>
        <div className='grid grid-cols-4 gap-5'>
         <div className='bg-[#D4E0DE] h-[163px] w-[150px] rounded-lg shadow-md text-black'>
          <img src={Cardiologist} alt="img" className='mx-auto' />
         </div>
         <div className='bg-[#D4E0DE] h-[163px] w-[150px] rounded-lg shadow-md text-black'>
          <img src={Dentist} alt="img" />
         </div>
         <div className='bg-[#D4E0DE] h-[163px] w-[150px] rounded-lg shadow-md text-black'>
          <img src={Opthalmologist} alt="img" />
         </div>
         <div className='bg-[#D4E0DE] h-[163px] w-[150px] rounded-lg shadow-md text-black'>
          <img src={Psycologist} alt="img" />
         </div>
        </div>
      </div>
      <p className='text-2xl font-bold text-cyan-500 m-7'>Enter Appoinment details</p>
      <form onSubmit={handleSubmit}>
      <label for="appoinmentdate" className='text-cyan-500 font-medium text-2xl mr-20 ml-7'>Enter Your Preffered Date:</label>
  <input type="date" id="appoinmentdate" name="appoinmentdate" className='bg-cyan-100  w-[40%] h-11 rounded-md shadow-md' />

  <label for="appoinmenttime" className='text-cyan-500 font-medium text-2xl mr-20 ml-7' onChange={handleChange}>Enter Your Preffered Date:</label>
  <input type="time" id="appoinmenttime" name="appoinmenttime" className='bg-cyan-100  w-[40%] h-11 rounded-md shadow-md mt-7' onChange={handleChange} />
  <input type="submit" className="w-32 h-10 rounded-md text-white bg-cyan-500 shadow-md mx-80 mt-14"/>
</form>
    </div>
  )
}

export default AppoinmentFormTwo
