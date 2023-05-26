import logo from "../../../assets/logo_preta.png"
import ring from "../../../assets/bellimg.png"
import userl from "../../../assets/userlog.png"


const header = () => {
    return (
<div className="bg-[#48A3A7] flex h-20">
<img className="invert p-2 ml-11" src={logo} alt="" />
<img className=" p-6 ml-[1100px]" src={ring} alt="" />
<img className="flex p-6 " src={userl} alt="" />
<button><h3 className="text-white text-[13px] text-left p-2">LOGIN OU REGISTRE-SE</h3></button>

</div>

    )
}
export default header