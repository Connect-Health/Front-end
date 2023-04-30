import Wave from '../../../assets/purplewave.png'
import Model from '../../../assets/mulher_psico.png'
import Brain from '../../../assets/brain.png'

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
            
        </div>
    )
}
export default Psico