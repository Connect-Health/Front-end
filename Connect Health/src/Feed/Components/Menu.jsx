import React from 'react'
import { BsBookmarkFill, BsCompassFill, BsFillGearFill } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdSubscriptions } from 'react-icons/md'


const Menu = () => {

    return (
        <div className='bg-[#658FF9] p-2 flex flex-col rounded-2xl w-[20%] h-fit mt-10 fixed left-[2.5%] top-20
    max-md:hidden
    '>
            <div className='flex gap-5 px-10 items-center mt-12 cursor-pointer'>
                <BsBookmarkFill className='text-white text-xl' />
                <h2 className='text-white text-lg'>Noticias em destaque</h2>
            </div>
            <div className='flex gap-5 px-10 items-center mt-6 cursor-pointer'>
                <MdSubscriptions className='text-white text-xl' />
                <h2 className='text-white text-lg'>Top Influenciadores</h2>
            </div>
            <div className='flex gap-5 px-10 items-center mt-6 cursor-pointer'>
                <BsCompassFill className='text-white text-xl' />
                <h2 className='text-white text-lg'>Explorar</h2>
            </div>
            <div className='flex gap-5 px-10 items-center mt-6 cursor-pointer'>
                <FaChalkboardTeacher className='text-white text-xl' />
                <h2 className='text-white text-lg'>Ensinamentos</h2>
            </div>

            <div className='flex gap-5 px-10 items-center mt-16 mb-4 cursor-pointer'>
                <BsFillGearFill className='text-white text-xl' />
                <h2 className='text-white text-lg'>Configurações</h2>
            </div>
        </div>
    )
}

export default Menu