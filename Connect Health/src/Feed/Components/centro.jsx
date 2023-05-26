import { BsBookmark } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';
import { BsTrophy } from 'react-icons/bs';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs'; 
import { BsGearFill } from 'react-icons/bs';
import { GrGallery } from 'react-icons/gr';
import { HiLocationMarker } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
import wiu from '../../../assets/wiu.jpeg';
import verseck from '../../../assets/verseck.jpeg';
import roger from '../../../assets/roger.png';
import fruta from '../../../assets/fruta.avif';
import mulher from '../../../assets/mulhersaudavel.avif';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';


const centro = () => {
    return ( 
  <div className="flex bg-[#F7F7F7]">
        <div className="flex-col text-justify text-white bg-[#48A3A7] h-[600px] w-[300px]  ml-10 mt-7 rounded-3xl  ">
        <div className="flex items-center space-x-2"> <BsBookmark className="text-red-500 w-6 h-6 ml-7" />  <p className="text-justify p-4">Notícias/Destaque</p></div>

        <div className="flex items-center space-x-2 "> 
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
    
      <div className="flex flex-col ">
        <div className="flex flex-col text-justify text-[gray] bg-white h-[200px] w-[650px] ml-16 mt-14">
          <form>
              <textarea className="flex resize-none w-28 h-14 flex-col space-y-4 p-4" placeholder='Título'></textarea>
            </form>
          <form className="flex flex-col shadow-md space-y-4 p-4">
            <textarea className="bg-gray-800 resize-none  text-[gray] rounded-lg p-2" placeholder="Escreva seu texto"></textarea>
            <div className="flex items-center">
            <button> <GrGallery className="text-[#48A3A7] w-6 h-6 mr-3 " /></button>
            <button> <HiLocationMarker className="text-[#48A3A7] w-6 h-6 mr-3" /></button>
              <button className="bg-[#48A3A7] hover:bg-[#185e62] text-white w-24 rounded-lg py-2 px-4">Postar</button>
            </div>
          </form>
          </div>
                    <div className="flex text-justify shadow-md text-gray-500 w-[650px] h-[330px] text-[gray] bg-white  w-650 ml-16 mt-14">
            <img className="h-11 w-11 mt-3 ml-5 rounded-full" src={wiu} alt="" />
            <div className="flex flex-col items-start ml-3">
              <h3 className="mt-3">Dr.Willian Rizzo</h3>
              <p className="text-xs mt-1 ">4 Horas atrás</p>
              <hr className="mt-3 border-[#8742] w-full" />
              <p className='mt-16 w-[500px]'>Emoções são mensagens que nos avisam de nossas necessidades !</p>
              <hr className="mt-[60px] border-[#8742] w-full" />
                        <div className='mt-[10px] text-[#48A3A7] space-x-4 '>
                <button>
                  <FaHeart />
                  Curtir
                </button>
                <button>
                  <FaComment />
                  Comentar
                </button>
                <button>
                  <FaShare />
                  Compartilhar
                </button>
              </div>
              <hr></hr>
            </div>
            

            
          </div>
          <div className="flex text-justify shadow-md text-gray-500 w-[650px] h-[630px] text-[gray] bg-white  ml-16 mt-14">
            <img className="h-11 w-11 mt-3 ml-5 rounded-full" src={verseck} alt="" />
            <div className="flex flex-col items-start ml-3">
              <h3 className="mt-3">Dr.Raphael Verseck</h3>
              <p className="text-xs mt-1 ">12 Horas atrás</p>
              <hr className="mt-3 border-[#8742] w-full" />
              <p className='mt-16 w-[500px] text-justify'>A relação do ser humano com a comida vai além dos cuidados com a balança. A faculdade de Nutrição, nesse sentido, aborda de forma teórica e prática diversas formas de trabalhar com a alimentação no âmbito da saúde. Desde a consulta clínica até a atuação na indústria alimentícia, as possibilidades são várias.</p>
              <img className="h-[180px] w-[200px] ml-36 mt-10  " src={fruta} alt="" />
              <hr className="mt-[60px] border-[#8742] w-full" />
                        <div className='mt-[10px] text-[#48A3A7] space-x-4 '>
                <button>
                  <FaHeart />
                  Curtir
                </button>
                <button>
                  <FaComment />
                  Comentar
                </button>
                <button>
                  <FaShare />
                  Compartilhar
                </button>
              </div>
              <hr></hr>
              </div>
              </div>

              <div className="flex text-justify shadow-md text-gray-500 w-[650px] h-[700px] text-[gray] bg-white  w-650 ml-16 mt-14">
            <img className="h-11 w-11 mt-3 ml-5 rounded-full" src={roger} alt="" />
            <div className="flex flex-col items-start ml-3">
              <h3 className="mt-3">Dr.Roger Vieira</h3>
              <p className="text-xs mt-1  ">2 Dias atrás</p>
              <hr className="mt-3 border-[#8742] w-full" />
              <p className='mt-12 w-[500px]'>Uma boa alimentação é essencial para manter uma vida saudável e prevenir doenças. Quando comemos alimentos nutritivos e balanceados, estamos fornecendo ao nosso corpo os nutrientes necessários para funcionar corretamente. </p>
              <img className="h-[280px] w-[500px]  mt-14  " src={mulher} alt="" />
              <hr className="mt-[60px] border-[#8742] w-full" />
                        <div className='mt-[10px] text-[#48A3A7] space-x-4 '>
                <button>
                  <FaHeart />
                  Curtir
                </button>
                <button>
                  <FaComment />
                  Comentar
                </button>
                <button>
                  <FaShare />
                  Compartilhar
                </button>
              </div>
              <hr></hr>
              </div>
              </div>
          
          </div>

          <div className='h-[800px] w-[250px] ml-[120px] bg-nutri'>
          <h3>Recomendações</h3><button><BsThreeDots></BsThreeDots></button>
          
          
          
          </div>

         
    
    
  
     
 
 </div>

  

    )
}
export default centro