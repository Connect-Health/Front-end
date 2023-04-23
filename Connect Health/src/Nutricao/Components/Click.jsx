import React from 'react'

const Click = (props) => {
  return (
    <div>
        <p className='border border-black text-black font-semibold cursor-pointer rounded-3xl px-3 text-sm hover:scale-110 transition-all duration-100 active:scale-90'>{props.text}</p>
    </div>
  )
}

export default Click;