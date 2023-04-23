import React from 'react'

const Horario = (props) => {
  return (
    <div>
        <p className='border border-black text-black w-16 text-center cursor-pointer rounded-3xl font-semibold text-sm hover:scale-125 duration-200 transition-all active:scale-100'>{props.hora}</p>
    </div>
  )
}

export default Horario