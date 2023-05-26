import React from 'react'

const Paragraph = (props) => {
  return (
    <div className='mt-2'>
        <p className='ml-5 max-md:ml-2 max-md:text-sm'> {props.text}</p>
    </div>
  )
}

export default Paragraph