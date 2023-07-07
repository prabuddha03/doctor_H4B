import React from 'react'

const Testimonial = ({ topHeading, middleText, bottomHeading}) => {
  return (
    <div className='text-[#00A8D0] py-16 text-center'>
      <p className='text-5xl py-7 font-normal'>{topHeading}</p>
      <p className='text-6xl font-extrabold pb-5'>{middleText}</p>
      <p className='text-5xl font-medium'>{bottomHeading}</p>

    </div>
  )
}

export default Testimonial
