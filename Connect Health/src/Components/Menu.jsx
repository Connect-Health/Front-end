import React, { useState } from 'react'
import BarsSolid from '../../assets/bars-solid.svg'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Menu = () => {
    const [open, setOpen] = useState(false)

    const abrirMenu = () => {
        setOpen(!open);
    }
  return (
    <div className='max-md:block hidden'>
        <button onClick={abrirMenu} className='h-5 w-5'>
                <img src={BarsSolid} alt="" />
        </button>

        {open && (
            <div className="fixed inset-0 bg-white z-50">
            <div className="max-w-md mx-auto py-4 px-6">
                <AiOutlineClose className='absolute top-3 right-3 text-2xl' onClick={abrirMenu} />
              <div className='flex justify-center items-center pt-[50%] flex-col'>
                <Link className='w-[90%] mx-auto mt-5 text-center bg-azulsite/25 py-3 uppercase font-bold shadow-md drop-shadow border-b rounded-xl ' to="/psicologia">Psicologia</Link>
                <Link className='w-[90%] mx-auto mt-5 text-center bg-azulsite/25 py-3 uppercase font-bold shadow-md drop-shadow border-b rounded-xl ' to="/nutricao">Nutrição</Link>
                <Link className='w-[90%] mx-auto mt-5 text-center bg-azulsite/25 py-3 uppercase font-bold shadow-md drop-shadow border-b rounded-xl ' to="/feed">Feed de Notícias</Link>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Menu