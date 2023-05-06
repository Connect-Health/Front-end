const Click = (props) => {

  const handleClick = (e) => {
    if(e.target.classList.contains(`${props.contain}`) === false) {
      e.target.classList.add(`${props.bg}`)
      e.target.classList.add(`${props.textClass}`)
    } else {
      e.target.classList.remove(`${props.rBG}`)
      e.target.classList.remove(`${props.rTextClass}`)
    }
  }

  return (
    <div>
        <p onClick={handleClick} className='border border-black text-black font-semibold cursor-pointer rounded-3xl px-3 text-sm hover:scale-110 transition-all duration-100 active:scale-90 '>{props.text}</p>
    </div>
  )
}

export default Click;