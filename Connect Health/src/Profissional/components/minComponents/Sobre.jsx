import React from 'react'

const Sobre = ({profissional}) => {
  return (
    <div className='mt-20 w-[90%] m-auto'>
        <h2 className='text-xl uppercase font-semibold mb-5'>Sobre mim</h2>
        <p className='mb-10 text-lg'>{profissional.descricao}</p>
    </div>
  )
}

export default Sobre