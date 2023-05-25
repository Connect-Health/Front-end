import React from 'react'

const Span = (props) => {
  return (
    <div className='mt-5'>
        <span className={`font-semibold `}>{props.span}</span>
    </div>
  )
}

export default Span