import React from 'react'
import { Link } from 'react-router-dom'
import Mulher from '../../../assets/mulher-nutri.svg'
import Planutri from '../../../assets/planutri.svg'
import PostNutri from '../../../assets/postnutri.svg'
import Protein from '../../../assets/protein.svg'
import Strong from '../../../assets/strong.svg'
import WaveFeed from '../../../assets/wavefeed.svg'

const Nutrim = () => {
    return (
      <div>
              <div id="nutricao" className='flex justify-evenly items-center'>
                <div className='w-[45%]'>
                  <img className='w-[60%]' src={Mulher} alt="" />
                </div>
                <div className='w-[28%] flex flex-col '>
                  <h2 className=' text-4xl text-nutri font-bold text-right '>Nutrição</h2>
                  <p className=' text-right mt-10 '>A Connect Health oferece suporte nutricional personalizado por meio de profissionais da nutrição, ajudando as pessoas a adotarem hábitos alimentares saudáveis, prevenirem e gerenciarem condições de saúde relacionadas à nutrição, e alcançarem seus objetivos de saúde e bem-estar.</p>
                </div>

          
              </div>

              <div className=' flex items-center justify-center gap-96 w-full h-24 mt-16 '>
                <img className='w-[65px] h-[65px]' src={Planutri} alt="" />
                <Link to='/nutricao' className='w-[15%] p-2 bg-nutri rounded-full text-[#fff] text-center'>Conheça mais aqui!</Link>
                <img className='w-[65px] h-[65px]' src={Planutri} alt="" />
            </div>

            <img className='mt-20' src={PostNutri} alt="" />
            <div className='w-full m-auto justify-center flex mt-10'>
              
                <h2 className='w-[25%] text-3xl text-nutri font-extrabold text-center'>Por que cuidar da sua alimentação?</h2>
            </div>

            <div className='w-[80%] m-auto mt-20 flex  justify-center items-center gap-96  box-content'>
                <div className='text-xl border-r-2 border-b-2 p-3 w-[40%]'>
                    <h3>Prevenção de doenças como:  </h3>
                    <h3>Cancer, depressão, diabetes, hipertensão, entre outras.</h3>
                </div>
                <img className='' src={Protein} alt="" />
            </div>

            <div className='w-[80%] m-auto mt-20 flex  justify-center items-center gap-96  box-content'>
                
                <img className='' src={Strong} alt="" />

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
              <img src={WaveFeed} alt="" />
            </div>
      </div>
      
    )
}

export default Nutrim