import React from 'react'

const Sobre = ({profissional}) => {
  return (
    <div className='mt-20 w-[90%] m-auto max-md:mt-5'>
        <h2 className='text-xl uppercase font-semibold mb-5 max-md:text-center max-md:text-lg max-md:mb-2.5'>Sobre mim</h2>
        <p className='mb-10 text-lg max-md:text-base'>{profissional.descricao}</p>
    </div>
  )
}

export default Sobre