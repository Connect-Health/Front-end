import React, { useState } from 'react'

const Click = (props) => {

  
  
  const handleClick = (e) => {
    if(e.target.classList.contains('bg-nutri') === false) {
      e.target.classList.add('bg-nutri')
      e.target.classList.add('text-white')

    } else {
      e.target.classList.remove('bg-nutri')
      e.target.classList.remove('text-[#000]')

    }
  }


  return (
    <div>
        <p onClick={handleClick} className='border border-black text-black font-semibold cursor-pointer rounded-3xl px-3 text-sm hover:scale-110 transition-all duration-100 active:scale-90 checked:bg-nutri'>{props.text}</p>
    </div>
  )
}

export default Click;