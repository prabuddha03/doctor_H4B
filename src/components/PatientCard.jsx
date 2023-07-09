import React from 'react';
import Medicinebottle from '../assets/medicinebottle.png'

const PatientCard = ({name}) => {
  return (
    <div className='h-[133px] w-[156px] bg-white rounded-md shadow-md'>
      <img src={Medicinebottle} alt="medicine" className='mx-auto h-[60%]' />
      <p className='text-cyan-500 font-semibold flex justify-center'>{name}</p>
    </div>
  )
}

export default PatientCard
