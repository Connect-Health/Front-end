const Click = (props) => {

  const handleClick = (e) => {
    if(e.target.classList.contains('bg-psi') === false) {
      e.target.classList.add('bg-psi')
      e.target.classList.add('text-white')
      e.target.classList.add('font-light')


    } else {
      e.target.classList.remove('bg-psi')
      e.target.classList.remove('font-light')
      e.target.classList.remove('text-white')
    }
  }


  return (
    <div>
        <p onClick={handleClick} className='border border-black text-black font-semibold cursor-pointer rounded-3xl px-3 text-sm hover:scale-110 transition-all duration-100 active:scale-90'>{props.text}</p>
    </div>
  )
}

export default Click;