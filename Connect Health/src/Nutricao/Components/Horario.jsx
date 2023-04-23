import React from 'react'

const Horario = (props) => {
  return (
    <div>
        <p className='border border-[#000] text-[#000] w-16 text-center cursor-pointer rounded-3xl font-semibold text-sm'>{props.hora}</p>
    </div>
  )
}

export default Horario