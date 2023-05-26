import React, { useState } from 'react'
import BarsSolid from '../../assets/bars-solid.svg'
import { AiOutlineClose } from 'react-icons/ai'


const Menu = () => {
    const [open, setOpen] = useState(false)

    const abrirMenu = () => {
        setOpen(!open);
    }
  return (
    <div className='max-md:block'>
        <button onClick={abrirMenu} className='h-5 w-5'>
                <img src={BarsSolid} alt="" />
        </button>

        {open && (
            <div className="fixed inset-0 bg-white z-50">
            <div className="max-w-md mx-auto py-4 px-6">
                <AiOutlineClose className='absolute top-3 right-3 text-2xl' onClick={abrirMenu} />
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>
        )}
    </div>
  )
}

export default Menu