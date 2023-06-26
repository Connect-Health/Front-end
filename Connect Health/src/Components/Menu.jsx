import React, { useContext, useState } from 'react'
import BarsSolid from '../../assets/bars-solid.svg'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import User from '../../assets/user.svg'
import { AuthContext } from '../AutoContext/AuthContext'
import Perfil from './Perfil'
import Notificacao from './Notificacao'


const Menu = (props) => {
    const { user } = useContext(AuthContext)

    const [open, setOpen] = useState(false)

    const abrirMenu = () => {
        setOpen(!open);
    }
  return (
    <div className='max-md:block hidden max-md:absolute z-50 left-2 top-3'>
        <button onClick={abrirMenu} className='h-5 w-5 absolute z-50 dark:invert'>
                <img src={BarsSolid} alt="" />
        </button>

        {open && (
            <div className="fixed inset-0 bg-[#e4ebf8] z-50 h-[110vh]">
                <div className=" mx-auto py-4 px-6">
                    <AiOutlineClose className='absolute top-4.5 right-3 text-2xl' onClick={abrirMenu} />
                    <div className='flex justify-center items-center pt-[30%] flex-col'>
                        <h2 className='text-xl font-bold uppercase mb-10'>Menu</h2>
                        <Link className='w-[90%] mx-auto mt-5 text-center bg-azulsite/25 py-3 uppercase font-bold shadow-md drop-shadow border-b rounded-xl ' to={`/${props.home}`}>{props.area1}</Link>
                        <Link className='w-[90%] mx-auto mt-5 text-center bg-azulsite/25 py-3 uppercase font-bold shadow-md drop-shadow border-b rounded-xl ' to={`/${props.link2}`}>{props.area2}</Link>
                        <Link className='w-[90%] mx-auto mt-5 text-center bg-azulsite/25 py-3 uppercase font-bold shadow-md drop-shadow border-b rounded-xl ' to={`/${props.link3}`}>{props.area3}</Link>
                        <Link className='w-[90%] mx-auto mt-5 text-center bg-azulsite/25 py-3 uppercase font-bold shadow-md drop-shadow border-b rounded-xl ' to={`/${props.link4}`}>{props.area4}</Link>
                    </div>
                </div>
                {user ? (
                    <div className='absolute top-3 left-3 flex items-center gap-5'>
                        <Perfil />
                        <Notificacao />
                    </div>
          ) : (
            <Link to="/login" className='absolute top-3 left-3 flex items-center' >
                <img src={User} alt="" className='w-10 h-10 border p-1 rounded-full ' />
            </Link>
          )}
                

                <h1 className='font-bold absolute bottom-20 left-1/2 -translate-x-1/2 uppercase text-azulsite'>Connect Health</h1>
            </div>
        )}
    </div>
  )
}

export default Menu