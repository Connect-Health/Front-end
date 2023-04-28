import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center py-3 px-10 bg-gradi bg-opacity-50'>
        <div className='flex gap-10 z-10 '>
          <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Psicologia</h2>
          <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Nutrição</h2>
          <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Cadastro</h2>

            
        </div>
        <div className='bg-[#0575E6] h-56 w-40 absolute ml-[1200px]'>
            <h2 className='text-[#fff] w-1/6 '>Tenha dicas dos melhores da área</h2>
        </div>

        <h3>penis</h3>

       

       
      </div>
    </div>
  )
}

export default Header