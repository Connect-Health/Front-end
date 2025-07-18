import Wave from '../../../assets/purplewave.png'
import Model from '../../../assets/mulher_psico2.png'
import Brain from '../../../assets/brain.png'
import HeadPsi from '../../../assets/headpsi.png'
import PlusPsi from '../../../assets/pluspsi.png'
import WaveNutri from '../../../assets/wavenutri.svg'
import PostPsi from '../../../assets/postpsi.svg'
import { Link } from 'react-router-dom'


function Psico(){
    return(
        <div id="psicologia" className='mt-40 max-md:mt-[38vh] max-md:mb-24 max-md:border-b max-md:pb-24 max-md:border-gradi/50'>
           <img src={Wave} alt="" className='max-md:hidden w-full hidden'/>
           <div className='flex justify-evenly
           max-md:flex-col max-md:items-center'>
                <div className='w-[45%] mt-10 ml-24 max-md:ml-0
                max-md:w-[80%]
                '>
                        <h2 className='text-psi font-bold text-4xl
                        max-md:text-2xl max-md:mt-10 max-md:text-center
                        '>Psicologia</h2>
                        <p className='pt-10 w-[75%]
                        max-md:w-[100%] max-md:text-[14px] max-md:text-center
                        '>A psicologia estuda o comportamento humano e suas emoções. A Connect Health pode oferecer ajuda para questões emocionais e de saúde mental, como depressão, ansiedade, estresse, traumas e problemas de relacionamento. Com a ajuda da psicologia, as pessoas podem aprender a lidar com suas emoções, superar desafios pessoais e desenvolver uma mentalidade mais saudável e positiva.</p>
                </div>
                    <div className=' w-1/4 max-md:w-2/5'>
                        <img className=' border bg-psi/70 rounded-full border-white m-auto
                        max-md:mt-10
                        ' src={Model} alt="modelo da connect healt segurando uma prancheta na mão" />
                    </div>
            </div>
            <div className=' flex items-center justify-center gap-96 w-full h-24 mt-16 
            max-md:gap-36 max-md:mt-10
            '>
                <img className='w-[65px] h-[65px]
                max-md:hidden
                ' src={Brain} alt="" />
                <Link to='/psicologia' className='w-[15%] p-2 text-center bg-psi rounded-full text-[#fff]
                max-md:text-sm max-md:w-[35%]
                '>Venha conhecer!</Link>
                <img className='w-[65px] h-[65px]
                max-md:hidden
                ' src={Brain} alt="" />
            </div>

            <div className='mt-20'>
                <img src={PostPsi} alt="" className='w-full' />
            </div>

            <div className='w-full m-auto justify-center flex mt-10'>
                <h2 className='w-[25%] text-3xl text-psi font-extrabold text-center
                max-md:text-xl max-md:w-[50%]
                '>Por que cuidar da sua saúde mental?</h2>
            </div>

            <div className='w-[85%] m-auto mt-20 flex  justify-between items-center  box-content
            max-md:w-[85%]
            '>
                <div className='text-xl  w-1/2 h-36 flex justify-center flex-col  border-psi bg-psi/10 dark:bg-psi/50 dark:shadow-white/10 shadow-lg rounded shadow-psi/20
                max-md:text-[14px] max-md:w-full max-md:h-32 max-md:pl-10
                '>
                    <h3>Prevenção de transtornos mentais como: <br /> Ansiedade, depressão, estresse... </h3>
                </div>
                <div className='w-1/2 flex justify-end max-md:hidden'>
                    <img className='w-[24%] max-md:h-24 max-md:w-28 max-md:' src={HeadPsi} alt="" />
                </div>
                
            </div>

            <div className='w-[85%] m-auto mt-20 max-md:mt-10 flex  justify-between items-center   box-content max-md:w-[85%]
            
            '>
                <div className='w-1/2 max-md:hidden'>
                    <img className='w-[24%] max-md:h-24' src={PlusPsi} alt="" />
                </div>
                

                <div className='text-xl  w-1/2 h-36 flex justify-center items-center flex-col  border-psi bg-psi/10 dark:bg-psi/50 dark:shadow-white/10 shadow-lg rounded shadow-psi/20
                max-md:text-[14px] max-md:w-full max-md:h-32 max-md:pl-10
                '>
                    <h3>Melhora o desempenho no trabalho: <br/> Fortalecimento de habilidades interpessoais, entre outras.</h3>
                </div>
                
            </div>

            <div className='w-[85%] m-auto mt-20 max-md:mt-10 flex  justify-between items-center   box-content max-md:w-[85%]
            '>
                <div className='text-xl  w-1/2 h-36 flex justify-center items-center flex-col  border-psi bg-psi/10 dark:bg-psi/50 dark:shadow-white/10 shadow-lg rounded shadow-psi/20
                max-md:text-[14px] max-md:w-full max-md:h-32 max-md:pl-10
                '>
                    <h3>Melhora na qualidade de vida e relacionamentos; <br /> Aumento na autoestima e confiança </h3>
                </div>
                
            </div>
            <div className=' mt-20 h-2/3 max-md:hidden '>
                <img src={WaveNutri} className='w-full' alt="" />
            </div>
            

        </div>
    )
}
export default Psico