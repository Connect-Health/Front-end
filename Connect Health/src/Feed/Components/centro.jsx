import { BsBookmark } from 'react-icons/bs';
import { BsTrophy, BsEmojiSmile } from 'react-icons/bs';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
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
import recomendar from '../../../assets/recomendar.png';
import personal from '../../../assets/personal.png';
import profissional1 from '../../../assets/profissional1.png';
import profissional2 from '../../../assets/profissional2.png';
import profissional3 from '../../../assets/profissional3.png';
import profissional4 from '../../../assets/profissional4.png';
import profissional5 from '../../../assets/profissional5.png';



const centro = () => {
    return ( 
  <div className="flex px-[5%] bg-[#F7F7F7]">
        <div className="flex-col text-justify text-white bg-[#658FF9] h-[400px] w-[15%]  ml-4 mt-7 rounded-3xl  ">
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
            <br></br><br></br><br></br>
        <div className="flex items-center space-x-2"> 
        <BsGearFill className="text-red-500 w-6 h-6 ml-7" />    
            <p className=" p-4">Configurações</p>
            </div>
            
          


    </div>
    
      <div className="flex w-[50%] flex-col ">
        <div className="flex flex-col text-justify text-[gray] bg-white h-[200px] w-[650px] ml-7 mt-14">
          <form>
              <textarea className="flex resize-none w-28 h-14 flex-col space-y-4 p-4" placeholder='Título'></textarea>
            </form>
                      <form className="flex flex-col shadow-md space-y-4 p-4">
              <textarea className="bg-gray-800 resize-none text-[gray] rounded-lg p-2" placeholder="Escreva seu texto"></textarea>
              <div className="flex items-center">
                <button><GrGallery className="text-[#658FF9] w-6 h-6 mr-3" /></button>
                <button><HiLocationMarker className="text-[#658FF9] w-6 h-6 mr-3" /></button>
                <button><BsEmojiSmile className='text-[#658FF9] w-6 h-6 mr-3'></BsEmojiSmile></button>
                <button className="ml-auto bg-[#658FF9] hover:bg-[#23638b] text-white w-24 rounded-lg py-2 px-4">Postar</button>
              </div>
            </form>
          </div>
                    <div className="flex text-justify shadow-md text-gray-500 w-[650px] h-[330px] text-[gray] bg-white  w-650 ml-7 mt-14">
            <img className="h-11 w-11 mt-3 ml-5 rounded-full" src={wiu} alt="" />
            <div className="flex flex-col items-start ml-3">
              <h3 className="mt-3">Dr.Willian Rizzo</h3>
              <p className="text-xs mt-1 ">4 Horas atrás</p>
              <hr className="mt-3 border-[#8742] w-full" />
              <p className='mt-16 w-[500px]'>Emoções são mensagens que nos avisam de nossas necessidades !</p>
              <hr className="mt-[60px] border-[#8742] w-full" />
                        <div className='mt-[10px] text-[#658FF9] space-x-4 '>
                <button>
                  <FaHeart className='hover:text-[#fc4646]' />
                  Curtir
                </button>
                <button>
                  <FaComment />
                  Comentar
                </button>
                <button>
                  <FaShare className='hover:text-[#4667fc]' />
                  Compartilhar
                </button>
              </div>
              <hr></hr>
            </div>
            

            
          </div>
          <div className="flex text-justify shadow-md text-gray-500 w-[650px] h-[630px] text-[gray] bg-white  ml-7 mt-14">
            <img className="h-11 w-11 mt-3 ml-5 rounded-full" src={verseck} alt="" />
            <div className="flex flex-col items-start ml-3">
              <h3 className="mt-3">Dr.Raphael Verseck</h3>
              <p className="text-xs mt-1 ">12 Horas atrás</p>
              <hr className="mt-3 border-[#8742] w-full" />
              <p className='mt-16 w-[500px] text-justify'>A relação do ser humano com a comida vai além dos cuidados com a balança. A faculdade de Nutrição, nesse sentido, aborda de forma teórica e prática diversas formas de trabalhar com a alimentação no âmbito da saúde. Desde a consulta clínica até a atuação na indústria alimentícia, as possibilidades são várias.</p>
              <img className="h-[180px] w-[200px] ml-36 mt-10  " src={fruta} alt="" />
              <hr className="mt-[60px] border-[#8742] w-full" />
                        <div className='mt-[10px] text-[#658FF9] space-x-4 '>
                <button>
                  <FaHeart className='hover:text-[#fc4646]' />
                  Curtir
                </button>
                <button>
                  <FaComment />
                  Comentar
                </button>
                <button>
                  <FaShare className='hover:text-[#4667fc]' />
                  Compartilhar
                </button>
              </div>
              <hr></hr>
              </div>
              </div>

              <div className="flex text-justify shadow-md text-gray-500 w-[650px] h-[700px] text-[gray] bg-white  w-650 ml-7 mt-14">
            <img className="h-11 w-11 mt-3 ml-5 rounded-full" src={roger} alt="" />
            <div className="flex flex-col items-start ml-3">
              <h3 className="mt-3">Dr.Roger Vieira</h3>
              <p className="text-xs mt-1  ">2 Dias atrás</p>
              <hr className="mt-3 border-[#8742] w-full" />
              <p className='mt-12 w-[500px]'>Uma boa alimentação é essencial para manter uma vida saudável e prevenir doenças. Quando comemos alimentos nutritivos e balanceados, estamos fornecendo ao nosso corpo os nutrientes necessários para funcionar corretamente. </p>
              <img className="h-[280px] w-[500px]  mt-14  " src={mulher} alt="" />
              <hr className="mt-[60px] border-[#8742] w-full" />
                        <div className='mt-[10px] text-[#658FF9]  space-x-4 '>
                <button>
                  <FaHeart className='hover:text-[#fc4646]' />
                  Curtir
                </button>
                <button>
                  <FaComment />
                  Comentar
                </button>
                <button>
                  <FaShare className='hover:text-[#4667fc]'  />
                  Compartilhar
                </button>
              </div>
              <hr></hr>
              </div>
              </div>
          </div>

        <div className='h-[1050px] flex-col flex text-center w-[15%] mr-[87px] mt-[60px] bg-white shadow-md text-[14px] ml-auto'>
          <h3 className="flex ml-2 items-center text-[gray]">
            Recomendações
            <button className="ml-24"><BsThreeDots></BsThreeDots></button>
          </h3>
          <hr className="mt-4 border-[#b4b4b422] w-full" />
          <img className="ml-1 h-[130px] w-[250px] mt-4" src={recomendar} alt="" />
          <h1 className='text-center text-[gray] mt-5'>CFN</h1>
          <p className='w-40 text-center flex ml-14 mt-2 '>Comprometidos com os 17 ODS da ONU, Sistema Conselhos Federal e Regionais de Nutricionistas atua para promover a sustentabilidade e garantir a saúde e a segurança alimentar e nutricional da população</p>

          <img className="h-[130px] ml-1 w-[250px] mt-4" src={personal} alt="" />
          <h1 className='text-center text-[gray] mt-5'>Universidade do futebol</h1>
          <p className='w-40 text-center mt-2 ml-14'>A  Psicologia do Esporte é importante para entender a influência dos fatores psicológicos no desempenho físico de um indivíduo e como a participação em esportes e exercício afeta o desenvolvimento psicológico, a saúde e o bem estar de uma pessoa.</p>
        <button className='mt-14'><p className='hover:text-[#124648] text-[#658FF9]'>ver mais</p></button>




        
        <div className='flex-col flex w-[260px]  mt-[60px] bg-white shadow-md text-[12px]'>
          <h3 className="flex ml-2 items-center text-[black]">
           Profissionais para seguir
            <button className="ml-10"><BsThreeDots></BsThreeDots></button>
          </h3>
          <hr className="mt-4 border-[#b4b4b422] w-full" />
        <div class="flex items-center">
          <button><img class="flex ml-1 h-[40px] w-[40px] mt-4" src={profissional1} alt="" /></button> 
            <button><h3 class="flex ml-2 items-center text-[black]">
            Dra.Carla Almeida
            </h3><p className='text-[10px] text-[gray]'>psicologo</p></button> 
          </div>
          <div class="flex items-center">
           <button> <img class="flex ml-1 h-[40px] w-[40px] mt-4" src={profissional2} alt="" /></button> 
           <button> <h3 class="flex ml-2 items-center text-[black]">
            Dra.Michelle Gomes
            </h3><p className='text-[10px] text-[gray]'>nutricionista</p></button> 
            </div>
            
            <div class="flex items-center">
           <button> <img class="flex ml-1 h-[40px] w-[40px] mt-4" src={profissional3} alt="" /></button> 
           <button> <h3 class="flex ml-2 items-center text-[black]">
            Dra.Malu Santana
            </h3><p className='text-[10px] text-[gray]'>nutricionista</p></button> 
            </div>

            <div class="flex items-center">
           <button> <img class="flex ml-1 h-[40px] w-[40px] mt-4" src={profissional4} alt="" /></button> 
           <button> <h3 class="flex ml-2 items-center text-[black]">
              Dr. Wendel Harrison
            </h3><p className='text-[10px] text-[gray]'>psicologo</p></button> 
            </div>

            <div class="flex items-center">
           <button> <img class="flex ml-1 h-[40px] w-[40px] mt-4" src={profissional5} alt="" /></button> 
           <button> <h3 class="flex ml-2 items-center text-[black]">
            Dr. Guilherme Garcia
            </h3><p className='text-[10px] text-[gray]'>psicologo</p></button> 
            </div>
        </div>

        
        </div>

        

         
    
    
  
     
 
 </div>

  

    )
}
export default centro