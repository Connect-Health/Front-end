import React from 'react'
import { Widget } from '@typeform/embed-react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Typeformpsico = () => {
  return (
    <div>
        <Link to='/psicologia'>
            <FaArrowLeft className='absolute text-xl z-10 left-3 top-3' />
        </Link>
        <Widget id="QgE54Y2m" className='h-screen w-full rounded-none'  />
    </div>
  )
}

export default Typeformpsico