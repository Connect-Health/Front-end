import React from 'react'

const List = (props) => {
  return (
    <ul className=''>
        <li className='list-disc mt-2'>{props.list}</li>
    </ul>
  )
}

export default List