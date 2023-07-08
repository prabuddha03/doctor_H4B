import React from "react";
import { useState } from "react";

const AppoinmentFormOne = () => {
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
    <div className="h-[644px] w-[440px] bg-[#dbf3eb] rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="py-5">
        <label className="m-10 text-cyan-500 font-medium">
          Enter your Preffered Date
          <input
            type="text"
            name="date"
            value={inputs.date || ""} 
            onChange={handleChange}
            className="ml-9 w-[70%] rounded-lg bg-white h-9 shadow-xl my-2 text-black font-normal"
          />
        </label>
        <label className="m-10 text-cyan-500 font-medium">
          Enter your Preffered Date
          <input
            type="text"
            name="date"
            value={inputs.date || ""} 
            onChange={handleChange}
            className="ml-9 w-[70%] rounded-lg bg-white h-9 shadow-xl my-2 text-black font-normal"
          />
        </label>
        <label className="m-10 text-cyan-500 font-medium">
          Enter your Preffered Date
          <input
            type="text"
            name="date"
            value={inputs.date || ""} 
            onChange={handleChange}
            className="ml-9 w-[70%] rounded-lg bg-white h-9 shadow-xl my-2 text-black font-normal"
          />
        </label>
        <label className="m-10 text-cyan-500 font-medium">
          Enter your Preffered Date
          <input
            type="text"
            name="date"
            value={inputs.date || ""} 
            onChange={handleChange}
            className="ml-9 w-[70%] rounded-lg bg-white h-9 shadow-xl my-2 text-black font-normal"
          />
        </label>
        <label className="m-10 text-cyan-500 font-medium">
          Enter your Preffered Date
          <input
            type="text"
            name="date"
            value={inputs.date || ""} 
            onChange={handleChange}
            className="ml-9 w-[70%] rounded-lg bg-white h-9 shadow-xl my-2 text-black font-normal"
          />
        </label>
        <label className="m-10 text-cyan-500 font-medium">
          Enter your Preffered Date
          <input
            type="text"
            name="date"
            value={inputs.date || ""} 
            onChange={handleChange}
            className="ml-9 w-[70%] rounded-lg bg-white h-9 shadow-xl my-2 text-black font-normal"
          />
        </label>
        <label className="m-10 text-cyan-500 font-medium">
          Enter your Preffered Date
          <input
            type="text"
            name="date"
            value={inputs.date || ""} 
            onChange={handleChange}
            className="ml-9 w-[70%] rounded-lg bg-white h-9 shadow-xl my-2 text-black font-normal"
          />
        </label>
        <input type="submit" className="w-32 h-10 rounded-md text-white bg-cyan-500 shadow-md mx-36 mt-4"/>
      </form>
      
    </div>
  );
};

export default AppoinmentFormOne;
