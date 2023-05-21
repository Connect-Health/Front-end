import React from 'react'

const Button = (props) => {
  return (
    <div className={`bg-${props.fundo} rounded-3xl w-fit fixed top-[92vh] left-1/2 -translate-x-1/2`}>
        <button className='text-white py-2 px-10 '>Agendar Consulta</button>
    </div>
  )
}

export default Button