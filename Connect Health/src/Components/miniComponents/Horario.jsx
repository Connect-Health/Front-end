import React from 'react'

const Horario = (props) => {

  const handleClick = (e) => {
    if(e.target.classList.contains(`${props.bg}`) === false) {
      e.target.classList.add(`${props.bg}`)
      e.target.classList.add(`${props.textClass}`)
    } else {
      e.target.classList.remove(`${props.bg}`)
      e.target.classList.remove(`${props.textClass}`)
    }
  }

  return (
    <div>
        <p onClick={handleClick} className='
          border border-black text-black w-16 text-center cursor-pointer rounded-3xl font-semibold text-sm hover:scale-125 duration-200 transition-all active:scale-100
          max-md:w-12 max-md:text-xs
        '>{props.hora}</p>
    </div>
  )
}

export default Horario