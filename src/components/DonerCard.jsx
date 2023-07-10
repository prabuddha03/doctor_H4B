import React from 'react'

const DonerCard = (props) => {
  return (
    <div className='bg-[#6ec6ee] h-[170px]'>
      <span className='text-cyan-900 text-2xl font-bold p-7'>{props.name}</span>
      <p><span className='text-cyan-800 font-medium p-7'>{props.address}</span></p>
      <p><span  className='text-cyan-800 font-medium p-7'>{props.bloodgroup}</span></p>
      <p><span  className='text-cyan-800 font-medium p-7'>{props.contact}</span></p>
      <span className='text-cyan-800 font-medium p-7'>{props.age}</span>
    </div>
  )
}

export default DonerCard
