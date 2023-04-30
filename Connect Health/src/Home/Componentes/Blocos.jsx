import bloco_1 from '../../../assets/bloco_1.png'
import bloco_2 from '../../../assets/bloco_2.png'
import bloco_3 from '../../../assets/bloco_3.png'

function Blocos(){
    return(
        <div className='flex w-full h-auto items-center justify-center gap-20  '>
            <div className='bg-bloco1 w-[25%] h-80 bg-contain bg-no-repeat flex-col flex'>
                <h3 className='font-bold text-[20px] text-center text-[#fff] w-[80%] mt-10 '>Psicologia</h3>
                <p className='text-center w-[65%] m-auto mr-24 text-[15px] text-[#fff] pt-5'>Aqui, sua saúde mental é respeitada.<br/>Nos conte o que está sentindo hoje e amanhã viva como nunca!</p>
                <button className='bg-[#8269E0] w-[55%] rounded-full p-1 text-[15px] text-[#fff] mt-16 mb-20 mr-16 self-center'>Conheça Mais!</button>
            </div>

            <div className='bg-bloco2 w-[25%] h-80 bg-contain bg-no-repeat flex-col flex'>
                <h3 className='font-bold text-[20px] text-center text-[#fff] w-[65%] ml-[10%] mt-10 '>Feed</h3>
                <p className='text-center w-[65%] ml-[10%] text-[15px] text-[#fff] pt-5'>Esteja por dentro de todas as novidades.<br/>Notícias, dicas, receitas, entre outras!
tudo no nosso Feed!</p>
                <button className='bg-[#fff] w-[55%] rounded-full p-1 text-[15px] text-[#284BFD] mt-20 mb-20 mr-16 self-center'>Conheça Mais!</button>
            </div>

            <div className='bg-bloco3 w-[25%] h-80 bg-contain bg-no-repeat flex-col flex'>
                <h3 className='font-bold text-[20px] text-center text-[#fff] w-[80%] mt-10 '>Nutrição</h3>
                <p className='text-center w-[65%] m-auto mr-24 text-[15px] text-[#fff] pt-5'>A alimentação é a parte mais importante do nosso dia. <br/>Mantenha uma alimentação saúdavel e desfrute do que seu corpo pode oferecer!</p>
                <button className='bg-[#62C49B] w-[55%] rounded-full p-1 text-[15px] text-[#fff] mt-16 mb-20 mr-16 self-center'>Conheça Mais!</button>
            </div>
        </div>
    )
}
export default Blocos