import React from 'react'

const Click = (props) => {
  return (
    <div>
        <p className='border border-[#000] text-[#000] font-semibold cursor-pointer rounded-3xl px-3 text-sm'>{props.text}</p>
    </div>
  )
}

export default Click;