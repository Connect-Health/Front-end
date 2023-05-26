import bloco_1 from '../../../assets/bloco_1.png'
import bloco_2 from '../../../assets/bloco_2.png'
import bloco_3 from '../../../assets/bloco_3.png'

function Blocos(){
    return(
        <div className='flex w-full h-auto items-center justify-center gap-20 mt-[48rem] 
        max-md:hidden
        '>
            <div className='w-[25%] h-80 bg-contain bg-no-repeat flex-col flex
            max-md:w-[27%] max-md:h-auto
            '>
                <img src={bloco_1} className='absolute w-[21%] -z-10 '/>

                <h3 className='font-bold text-[20px] text-center text-[#fff] w-[80%] mt-10 
                max-md:text-lg max-md:mt-6 max-md:ml-4
                '>Psicologia</h3>
                <p className='text-center w-[65%] ml-[8.5%] text-[15px] text-[#fff] pt-5
                max-md:w-[85%] max-md:text-[12px] max-md:ml-4 max-md:pt-2
                '>Aqui, sua saúde mental é respeitada.<br/>Nos conte o que está sentindo hoje e amanhã viva como nunca!</p>
                <a href='#psicologia' className='bg-[#8269E0] w-[55%] text-center rounded-full p-1 text-base text-[#fff] mt-5 mb-20 ml-[13%]
                max-md:w-[75%] max-md:mt-3 max-md:mr-2 max-md:text-[12px]
                '>Conheça Mais!</a>
            </div>

            <div className=' w-[25%] h-80 bg-contain bg-no-repeat flex-col flex
            max-md:w-[27%] max-md:h-auto
            '>
                <img src={bloco_2} className='absolute w-[21%] -z-10 '/>
                <h3 className='font-bold text-[20px] text-center text-[#fff] w-[65%] ml-[10%] mt-10 
                max-md:text-lg max-md:mt-6 max-md:ml-4 relative z-10
                '>Feed</h3>
                <p className='text-center w-[65%] ml-[8.5%] text-[15px] text-[#fff] pt-5
                max-md:w-[85%] max-md:text-[12px] max-md:ml-4 max-md:pt-2
                '>Esteja por dentro de todas as novidades.<br/>Notícias, dicas, receitas, entre outras!
tudo no nosso Feed!</p>
                <a href='#feed' className='text-center bg-[#fff] w-[55%] rounded-full p-1 text-base text-[#284BFD] mt-10 mb-20 ml-[13%]
                max-md:w-[75%] max-md:mt-3 max-md:mr-2 max-md:text-[12px]
                '>Conheça Mais!</a>
            </div>

            <div  className=' w-[25%] h-80 bg-contain bg-no-repeat flex-col flex'>
                <img src={bloco_3} className='absolute w-[21%] -z-10 '/>

                <h3 className='font-bold text-[20px] text-center text-[#fff] w-[80%] mt-10 '>Nutrição</h3>
                <p className='text-center w-[65%] ml-[8.5%] text-[15px] text-[#fff] pt-5'>A alimentação é a parte mais importante do nosso dia. <br/>Mantenha uma alimentação saúdavel e desfrute do que seu corpo pode oferecer!</p>
                <a href='#nutricao' className='text-center bg-[#62C49B] w-[55%] rounded-full p-1 text-base text-[#fff] mt-5 mb-20 ml-[13%]'>Conheça Mais!</a>
            </div>
        </div>
    )
}
export default Blocos