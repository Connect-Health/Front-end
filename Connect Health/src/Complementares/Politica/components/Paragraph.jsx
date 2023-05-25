import React from 'react'

const Paragraph = (props) => {
  return (
    <div className='mt-2'>
        <p className='ml-5'> {props.text}</p>
    </div>
  )
}

export default Paragraph