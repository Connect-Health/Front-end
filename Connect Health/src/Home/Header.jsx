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
        <div className='bg-black h-32 w-60 absolute mx-0'>
          {/* <h2 className='text-[#fff]'>Tenha dicas dos melhores da área</h2> */}
        </div>

        

       

       
      </div>
    </div>
  )
}

export default Header