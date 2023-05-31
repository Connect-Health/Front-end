import React from 'react'
import { BsImageFill, BsThreeDots } from 'react-icons/bs'
import { MdLocationOn, MdSubscriptions } from 'react-icons/md'

const Postar = () => {
  return (
    <div className='bg-white pt-3 pl-3 flex flex-col h-fit mt-10 rounded-xl mb-14
    max-md:hidden
    '>
        <input type="text" placeholder='Titulo' className='w-1/2 ml-10 py-2 pl-5 outline-none  focus:border rounded-lg border-gradi/40' />
        <input type="text" placeholder='Escreva seu texto' className='w-[90%] ml-10 py-2 pl-5 pb-10 mb-2 border-b border-gradi/40 outline-none  focus:border rounded-lg mt-5' />

        <div className='flex justify-between items-center'>
            <div className='items-center flex gap-3 ml-10 mt-3 mb-3'>
                <BsImageFill className='text-2xl text-[#658FF9] cursor-pointer' />
                <MdSubscriptions className='text-2xl text-[#658FF9] cursor-pointer' />
                <MdLocationOn className='text-2xl text-[#658FF9] cursor-pointer' />
                <BsThreeDots className='text-2xl text-[#658FF9] cursor-pointer' />
            </div>

            <div>
                <button className='bg-[#658FF9] text-white rounded-lg mr-10 py-2 px-4 text-sm'>Postar</button>
            </div>
        </div>
    </div>
  )
}

export default Postar