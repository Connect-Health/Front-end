import React from 'react'
import Rating from '@mui/material/Rating';


const CardAvaliacao = () => {
  return (
    <div className='drop-shadow-lg w-[90%] pb-6 rounded-2xl mt-10 mx-auto mb-7 bg-white'>
        <div className=' ml-4 pt-4 flex gap-5 '>
            <p className='text-white bg-[#55DF5A] w-14 h-14 font-bold rounded-full flex items-center justify-center'>5,0</p>
            <p className='w-4/5 mt-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, aspernatur iusto incidunt sit error sint ull</p>
        </div>

        <div className='flex justify-around  mt-5 items-center'>
            <p className='text-[#55DF5A] text-lg font-semibold'>Avaliação</p>

            <Rating
                        name="text-feedback"
                        value={5}
                        readOnly
                        precision={0.5}
                    />
        </div>

        <div className='mt-6 ml-10 '>
            <p>Rafinha</p>
            <p>07/04/2023 - 17:59</p>
        </div>
    </div>
  )
}

export default CardAvaliacao