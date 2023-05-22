import React from 'react'
import Rating from '@mui/material/Rating';


const CardAvaliacao = () => {
  return (
    <div className='drop-shadow-lg w-[90%] pb-6 rounded-2xl mt-10 mx-auto mb-7 bg-white max-md:pb-3 max-md:mb-0 max-md:mt-5'>
        <div className='ml-4 pt-4 flex gap-5 '>
            <p className='text-white bg-azulsite/50 w-14 h-14 font-bold rounded-full flex items-center justify-center max-md:w-10 max-md:h-10'>5,0</p>
            <p className='w-4/5 mt-5 max-md:mt-1 max-md:text-sm '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, aspernatur iusto incidunt sit error sint ull</p>
        </div>

        <div className='flex justify-around  mt-5 items-center max-md:mt-2'>
            <p className='text-azulsite/70 text-lg font-semibold max-md:text-base'>Avaliação</p>

            <Rating
                        name="text-feedback"
                        value={5}
                        readOnly
                        precision={0.5}
                        size='small'
                    />
        </div>

        <div className='mt-6 ml-10 max-md:mt-3'>
            <p className='max-md:text-sm text-black/50 font-semibold'>Rafinha</p>
            <p className='max-md:text-sm text-black/50 font-semibold'>07/04/2023 - 17:59</p>
        </div>
    </div>
  )
}

export default CardAvaliacao