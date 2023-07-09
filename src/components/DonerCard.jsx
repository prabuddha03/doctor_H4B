import React from 'react'

const DonerCard = (props) => {
  return (
    <div className='bg-[#7ACCF1] h-[170px]'>
      <span>{props.name}</span>
      <span>{props.address}</span>
      <span>{props.bloodgroup}</span>
      <span>{props.contact}</span>
    </div>
  )
}

export default DonerCard
