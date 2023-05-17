import Wave from '../../../assets/purplewave.png'
import Model from '../../../assets/mulher_psico.png'
import Brain from '../../../assets/brain.png'
import HeadPsi from '../../../assets/headpsi.svg'
import PlusPsi from '../../../assets/pluspsi.svg'
import WaveNutri from '../../../assets/wavenutri.svg'
import PostPsi from '../../../assets/postpsi.svg'
import { Link } from 'react-router-dom'


function Psico(){
    return(
        <div id="psicologia" className='max-md:mt-56'>
           <img src={Wave} alt="" className='max-md:hidden'/>
           <div className='flex justify-evenly'>
                <div className='w-[45%] mt-10 ml-24
                max-md:w-[80%] max-md:ml-12
                '>
                        <h2 className='text-psi font-bold text-4xl
                        max-md:text-2xl max-md:mt-10
                        '>Psicologia</h2>
                        <p className='pt-10 w-[75%]
                        max-md:w-[100%] max-md:text-[14px]
                        '>A psicologia estuda o comportamento humano e suas emoções. A Connect Health pode oferecer ajuda para questões emocionais e de saúde mental, como depressão, ansiedade, estresse, traumas e problemas de relacionamento. Com a ajuda da psicologia, as pessoas podem aprender a lidar com suas emoções, superar desafios pessoais e desenvolver uma mentalidade mais saudável e positiva.</p>
                </div>
                    <div>
                        <img className='w-[70%] bg-psi rounded-full m-auto
                        max-md:mt-24
                        ' src={Model} alt="" />
                    </div>
            </div>
            <div className=' flex items-center justify-center gap-96 w-full h-24 mt-16 
            max-md:gap-36 max-md:mt-10
            '>
                <img className='w-[65px] h-[65px]' src={Brain} alt="" />
                <Link to='/psicologia' className='w-[15%] p-2 text-center bg-psi rounded-full text-[#fff]
                max-md:text-sm max-md:w-[25%]
                '>Venha conhecer!</Link>
                <img className='w-[65px] h-[65px]' src={Brain} alt="" />
            </div>

            <div className='mt-20'>
                <img src={PostPsi} alt="" />
            </div>

            <div className='w-full m-auto justify-center flex mt-10'>
                <h2 className='w-[25%] text-3xl text-psi font-extrabold text-center
                max-md:text-2xl max-md:w-[50%]
                '>Por que cuidar da sua saúde mental?</h2>
            </div>

            <div className='w-[80%] m-auto mt-20 flex  justify-center items-center gap-96  box-content'>
                <div className='text-xl border-r-2 border-b-2 p-3'>
                    <h3>Prevenção de transtornos mentais como: </h3>
                    <h3>Ansiedade, depressão, estresse...</h3>
                </div>
                <img className='' src={HeadPsi} alt="" />
            </div>

            <div className='w-[80%] m-auto mt-20 flex  justify-center items-center gap-96  box-content'>
                
                <img className='' src={PlusPsi} alt="" />

                <div className='text-xl border-l-2 border-b-2 p-3  w-[40%]'>
                    <h3>Melhora no desempenho no trabalho </h3>
                    <h3>Fortalecimento de habilidades interpessoais, entre outras.</h3>
                </div>
                
            </div>

            <div className='w-[70%] m-auto mt-20 flex  justify-start items-center box-content'>
                <div className='text-xl border-r-2 border-b-2 p-3 w-[45%]'>
                    <h3>Melhora na qualidade de vida e relacionamentos; </h3>
                    <h3> Aumento na autoestima e confiança</h3>
                </div>
                
            </div>
            <div className=' mt-20 h-2/3'>
                <img src={WaveNutri} alt="" />
            </div>
            

        </div>
    )
}
export default Psico