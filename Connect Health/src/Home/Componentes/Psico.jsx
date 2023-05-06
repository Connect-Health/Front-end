import Wave from '../../../assets/purplewave.png'
import Model from '../../../assets/mulher_psico.png'
import Brain from '../../../assets/brain.png'
import HeadPsi from '../../../assets/headpsi.svg'
import PlusPsi from '../../../assets/pluspsi.svg'
import WaveNutri from '../../../assets/wavenutri.svg'

function Psico(){
    return(
        <div>
           <img src={Wave} alt="" />
           <div className='flex justify-evenly'>
                <div className='w-[45%] mt-10 ml-24'>
                        <h2 className='text-psi font-bold text-4xl'>Psicologia</h2>
                        <p className='pt-10 w-[75%]'>A psicologia estuda o comportamento humano e suas emoções. A Connect Health pode oferecer ajuda para questões emocionais e de saúde mental, como depressão, ansiedade, estresse, traumas e problemas de relacionamento. Com a ajuda da psicologia, as pessoas podem aprender a lidar com suas emoções, superar desafios pessoais e desenvolver uma mentalidade mais saudável e positiva.</p>
                </div>
                    <div>
                        <img className='w-[70%] bg-psi rounded-full m-auto' src={Model} alt="" />
                    </div>
            </div>
            <div className=' flex items-center justify-center gap-96 w-full h-24 mt-16 '>
                <img className='w-[65px] h-[65px]' src={Brain} alt="" />
                <button className='w-[15%] h-10 bg-psi rounded-full text-[#fff]'>Venha conhecer!</button>
                <img className='w-[65px] h-[65px]' src={Brain} alt="" />
            </div>

            <div className='w-full m-auto justify-center flex mt-10'>
                <h2 className='w-[25%] text-3xl text-psi font-extrabold text-center'>Por que cuidar da sua saúde mental?</h2>
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
            <div className=' mt- h-2/3'>
                <img src={WaveNutri} alt="" />
            </div>
            

        </div>
    )
}
export default Psico