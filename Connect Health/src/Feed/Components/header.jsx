import logo from "../../../assets/logo_preta.png"
import ring from "../../../assets/bellimg.png"
import userl from "../../../assets/userlog.png"
import { Link } from "react-router-dom"



const header = () => {
    return (
<div className="bg-[#658FF9] w-full flex h-20 fixed z-10">
  <Link to='/' className="w-16 pt-2 ml-5">
    <img className="invert " src={logo} alt="" />
  </Link>

  <div className="flex flex-grow justify-end items-center">
<button> <img className="p-6 h-20" src={ring} alt="" /></button>
 <Link to='/login'></Link>
    <Link to ='/login' className="flex items-center mr-10">
      <img className=" h-10 w-fit" src={userl} alt="" />
      <h3 className="text-white text-[13px]
      max-md:hidden
      ">LOGIN OU REGISTRE-SE</h3>
    </Link>
  </div>
</div>

    )
}
export default header