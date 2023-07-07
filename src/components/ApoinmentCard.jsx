import React from 'react';
import Appoinment from '../assets/appointment.png';

const ApoinmentCard = ({ imgUrl, heading, text }) => {
  return (
    <div className='h-[331px] w-[331px] bg-white rounded-xl shadow-xl'>
      <img src={imgUrl} alt="logo" className='mx-auto pt-12' />
       <p className='text-2xl text-[#5B084B] relative top-7 px-20'>{heading}</p>
       <p className='py-11 text-center'>{text}</p>
    </div>
  )
}

export default ApoinmentCard
