import React from 'react'

const Horario = (props) => {

  const handleClick = (e) => {
    if(e.target.classList.contains('bg-nutri') === false) {
      e.target.classList.add('bg-nutri')
      e.target.classList.add('text-white')
      e.target.classList.add('font-light')
      e.target.classList.add('border-[#fff]')

    } else {
      e.target.classList.remove('bg-nutri')
      e.target.classList.remove('font-light')
      e.target.classList.remove('text-white')
      e.target.classList.remove('border-[#fff]')
    }
  }

  return (
    <div>
        <p onClick={handleClick} className='border border-black text-black w-16 text-center cursor-pointer rounded-3xl font-semibold text-sm hover:scale-125 duration-200 transition-all active:scale-100'>{props.hora}</p>
    </div>
  )
}

export default Horario