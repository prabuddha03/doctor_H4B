import React from "react";
import Faqdesing from '../assets/FAQdesign.png';

const Questions = () => {
  return (
    <div className="w-full py-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <ul className="text-3xl text-white font-semibold list-disc cursor-pointer">
            <li className="py-4">What is a Payment Gateway?</li>
            <li className="py-4">
              Do I need to pay to Instapay even when there is no transaction
              going on in my business?
            </li>
            <li className="py-4">
              Do I need to pay to Instapay even when there is no transaction
              going on in my business?
            </li>
            <li className="py-4">
              Do I need to pay to Instapay even when there is no transaction
              going on in my business?
            </li>
          </ul>
          
        </div>
        <img src={Faqdesing} alt="pic" />
      </div>
    </div>
  );
};

export default Questions;
