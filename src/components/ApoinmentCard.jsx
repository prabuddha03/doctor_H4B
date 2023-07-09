import React from 'react';

const ApoinmentCard = ({ imgUrl, heading, text }) => {
  return (
    <button type='button' className='h-[331px] w-[331px] bg-white rounded-xl shadow-xl cursor-pointer hover:bg-cyan-100'>
      <img src={imgUrl} alt="logo" className='mx-auto pt-12' />
       <p className='text-2xl text-[#5B084B] flex justify-center pt-8'>{heading}</p>
       <p className='pt-8 text-center flex justify-center'>{text}</p>
    </button>
  )
}

export default ApoinmentCard
