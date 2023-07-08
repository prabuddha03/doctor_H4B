import React from 'react'

const HeadingText = ({ text }) => {
  return (
    <div className={`text-6xl font-medium w-1/2 relative text-cyan-950 left-48 pt-12 leading-relaxed`}>
      {text}
    </div>
  )
}

export default HeadingText
