import logo from "../../../assets/logo_preta.png"
import ring from "../../../assets/bellimg.png"
import userl from "../../../assets/userlog.png"



const header = () => {
    return (
<div className="bg-[#48A3A7] w-full flex h-20">
  <img className="invert p-2" src={logo} alt="" />

  <div className="flex flex-grow justify-end items-center">
<button> <img className="p-6 h-20" src={ring} alt="" /></button>
 <button><img className="p-6 h-20" src={userl} alt="" /></button>
    <button>
      <h3 className="text-white text-[13px] p-2">LOGIN OU REGISTRE-SE</h3>
    </button>
  </div>
</div>

    )
}
export default header