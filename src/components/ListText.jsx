import React from 'react'

const ListText = () => {
  return (
    <div className='py-36 font-semibold'>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className='text-center flex items-center justify-center w-auto text-4xl px-40'>
    Diabetes is mainly of two types. Type 1 diabetes is marked by the inability of the body to produce any insulin. Type 2 diabetes produce insulin like anyone else, but their bodies are unable to process it effectively.
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='text-center flex items-center justify-center w-auto text-4xl px-40'>
  Heart disease is the leading cause of death in the average population especially women over 40 years old, especially after menopause.
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='text-center flex items-center justify-center w-auto text-4xl px-40'>
  Breast cancer is the second leading cause of cancer-related deaths among women. Regular check-ups and screening tests can find breast cancer at an earlier stage, when treatment works best.
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
      
    </div>
  </div> 
</div>
    </div>
  )
}

export default ListText
