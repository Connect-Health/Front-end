import logo from "../../../assets/logo_preta.png"
import ring from "../../../assets/bellimg.png"
import userl from "../../../assets/userlog.png"
import { Link } from "react-router-dom"
import Perfil from "../../Components/Perfil"
import { useContext } from "react"
import { AuthContext } from "../../AutoContext/AuthContext"



const header = () => {
  const { user } = useContext(AuthContext)

    return (
<div className="bg-[#658FF9] w-full flex h-20 fixed z-0">
  <Link to='/' className="w-16 pt-2 ml-5">
    <img className="invert " src={logo} alt="" />
  </Link>

  <div className="flex flex-grow justify-end items-center">
    {user ? (
      <div className=' flex items-center mr-10'>
        <button> <img className="pr-5 h-8" src={ring} alt="" /></button>
        <Perfil />
      </div>
      ) : (
        <Link to ='/login' className="flex items-center mr-10 max-md:mr-5">
          <img className=" h-10 w-16" src={userl} alt="" />
          <h3 className="text-white text-[13px]
          max-md:hidden
          ">LOGIN OU REGISTRE-SE</h3>
        </Link>
      )
    }
    
  </div>
</div>

    )
}
export default header