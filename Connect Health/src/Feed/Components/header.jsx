import logo from "../../../assets/logo_preta.png"
import ring from "../../../assets/bellimg.png"
import userl from "../../../assets/userlog.png"
import { Link } from "react-router-dom"



const header = () => {
    return (
<div className="bg-[#658FF9] w-full flex h-20">
  <img className="invert p-2 px-6" src={logo} alt="" />

  <div className="flex flex-grow justify-end items-center">
<button> <img className="p-6 h-20" src={ring} alt="" /></button>
 <Link to='/login'><img className="p-6 h-20" src={userl} alt="" /></Link>
    <Link to ='/login'>
      <h3 className="text-white text-[13px] p-2">LOGIN OU REGISTRE-SE</h3>
    </Link>
  </div>
</div>

    )
}
export default header