import React from 'react'
import { Link } from 'react-router-dom'
import Mulher from '../../../assets/mulher_nutri2.png'
import Planutri from '../../../assets/planutri.png'
import PostNutri from '../../../assets/postnutri.svg'
import Protein from '../../../assets/protein.png'
import Strong from '../../../assets/strong.png'
import WaveFeed from '../../../assets/wavefeed.svg'

const Nutrim = () => {
    return (
      <div>
              <div id="nutricao" className='flex justify-evenly items-center
              max-md:mt-10 max-md:flex-col'>
                <div className='w-1/4'>
                  <img className='bg-nutri rounded-full
                  max-md:hidden
                  ' src={Mulher} alt="" />
                </div>
                <div className='w-[35%] flex flex-col 
                max-md:w-[70%]
                '>
                  <h2 className=' text-4xl text-nutri font-bold text-right 
                  max-md:text-2xl max-md:text-center
                  '>Nutrição</h2>
                  <p className=' text-right mt-10 
                  max-md:w-[100%] max-md:text-[14px] max-md:text-left
                  '>A Connect Health oferece suporte nutricional personalizado por meio de profissionais da nutrição, ajudando as pessoas a adotarem hábitos alimentares saudáveis, prevenirem e gerenciarem condições de saúde relacionadas à nutrição, e alcançarem seus objetivos de saúde e bem-estar.</p>
                </div>

                  
              </div>

              <div className=' flex items-center justify-center gap-96 w-full h-24 mt-16 
              max-md:gap-36 max-md:mt-10
              '>
                <img className='w-[65px] h-[65px]
                max-md:hidden
                ' src={Planutri} alt="" />
                <Link to='/nutricao' className='w-[15%] p-2 bg-nutri rounded-full text-[#fff] text-center
                max-md:text-sm max-md:w-[45%]
                '>Conheça mais aqui!</Link>
                <img className='w-[65px] h-[65px]
                max-md:hidden
                ' src={Planutri} alt="" />
            </div>

            <img className='mt-20 w-full' src={PostNutri} alt="" />
            <div className='w-full m-auto justify-center flex mt-10'>
              
                <h2 className='w-[25%] text-3xl text-nutri font-extrabold text-center
                max-md:text-xl max-md:w-[50%]
                '>Por que cuidar da sua alimentação?</h2>
            </div>

            <div className='w-[85%] m-auto mt-20 flex  justify-between items-center   box-content
            max-md:gap-20 max-md:w-[90%]
            '>
                <div className='text-xl w-1/2 h-36 flex justify-center items-center flex-col  border-nutri bg-nutri/10 shadow-lg rounded shadow-nutri/20
                max-md:text-[14px] max-md:w-[45%]
                '>
                    <h3>Prevenção de doenças como: <br /> Cancer, depressão, diabetes, hipertensão, entre outras. </h3>
                </div>
                <img className='w-[12%] max-md:h-24 max-md:w-20' src={Protein} alt="" />
            </div>

            <div className='w-[85%] m-auto mt-20 flex  justify-between items-center  box-content
            max-md:gap-20 max-md:w-[90%]
            '>
                
                <img className='w-[12%] max-md:h-20 max-md:w-20' src={Strong} alt="" />

                <div className='text-xl w-1/2 h-36 flex justify-center items-center flex-col  border-nutri bg-nutri/10 shadow-lg rounded shadow-nutri/20
                max-md:text-[14px] max-md:w-[54%] max-md:text-sm
                '>
                    <h3>Melhora no desempenho no trabalho <br /> Fortalecimento de habilidades interpessoais, entre outras.</h3>
                </div>
                
            </div>

            <div className='w-[85%] m-auto mt-20 flex  justify-start items-center box-content
            max-md:w-[90%]
            '>
                <div className='text-xl w-1/2 h-36 flex justify-center items-center flex-col  border-nutri bg-nutri/10 shadow-lg rounded shadow-nutri/20
                max-md:w-[50%] max-md:text-sm
                '>
                    <h3>Melhora na qualidade de vida e relacionamentos; <br />  Aumento na autoestima e confiança </h3>
                </div>
                
            </div>

            <div className=' mt-20 h-2/3 '>
              <img src={WaveFeed} className='w-full' alt="" />
            </div>
      </div>
      
    )
}

export default Nutrim