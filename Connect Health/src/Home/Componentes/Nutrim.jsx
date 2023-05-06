import React from 'react'
import { Link } from 'react-router-dom'
import Mulhern from '../../../assets/mulher-nutri.png'

const Nutrim = () => {
    return (
      <div>
       
        <div className='flex  w-full justify-end align-center mt-72'>
          <div className='flex w-1/5 justify-center bg-white'>
            < h2 className='text-[#71B80F]  text-[35px]  font-bold'>Nutrição</h2>
          </div>
        
        </div>
        
        <div>
          <div className='flex w-1/5 rounded-full h-[290px] bg-nutri justify-center'> 
           <img className='rounded-full h-[360px] w-[290px] bottom-[70px] absolute ' src={Mulhern} alt="" />
          </div>
          
          <div>
            
          </div>

        </div>
      </div>
    )
}

export default Nutrim