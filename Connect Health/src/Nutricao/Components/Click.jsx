import React from 'react'

const Click = (props) => {
  return (
    <div>
        <p className='border border-black text-black font-semibold cursor-pointer rounded-3xl px-3 text-sm'>{props.text}</p>
    </div>
  )
}

export default Click;