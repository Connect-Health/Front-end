import { BsBookmark } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';
import { BsTrophy } from 'react-icons/bs';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs'; 
import { BsGearFill } from 'react-icons/bs';

const centro = () => {
    return ( 
  <div className="">
    <div className="flex-col text-justify text-white bg-gradient-to-t from-[cyan] to-[blue] h-[600px] w-[300px]  ml-10 mt-7 rounded-3xl  ">
    <div className="flex items-center space-x-2"> <BsBookmark className="text-red-500 w-6 h-6 ml-7" />  <p className="text-justify p-4">Notícias em Destaque</p></div>

     <div className="flex items-center space-x-2"> 
        <BsTrophy className="text-red-500 w-6 h-6 ml-7" />
        <p className=" p-4">Top Influenciadores</p>

    </div>

    <div className="flex items-center space-x-2"> 
    <MdOutlineTravelExplore className="text-red-500 w-6 h-6 ml-7" />
        <p className=" p-4">Explorar</p>
        </div>

        <div className="flex items-center space-x-2"> 
        <FaGraduationCap className="text-red-500 w-6 h-6 ml-7" />
        <p className=" p-4">Ensinamentos</p>
        </div>

        <div className="flex items-center space-x-2">
        <BsPersonCircle className="text-red-500 w-6 h-6 ml-7" /> 
        <p className=" p-4">Meu Perfil</p>
        </div>

     <div className="flex items-center space-x-2"> 
     <BsGearFill className="text-red-500 w-6 h-6 ml-7" />    
        <p className=" p-4">Configurações</p>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
        
        <div className="flex items-center space-x-2">
      <BiExit className=" text-red-500 w-6 h-6 ml-7" />
      <p className="p-4">Logout</p> 
        </div>
       
       
       


    </div>
  
  </div>

    )
}
export default centro