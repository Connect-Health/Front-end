import ModelFeed from '../../../assets/modelofeed.svg'
import PostFeed from '../../../assets/postfeed.svg'
import ArcoFeed from '../../../assets/arcofeed.svg'
import WaveSobre from '../../../assets/wavesobre.svg'


function Feed(){
    return(
        <div>
            <div className='flex justify-evenly'>
                <div className='w-[45%] mt-10 ml-24'>
                        <h2 className='text-[#5D59FF] font-bold text-4xl'>Feed</h2>
                        <p className='pt-10 w-[75%]'>Fique em forma, cuide da sua mente e melhore sua qualidade de vida com nossas dicas exclusivas de nutrição e psicologia, oferecidas pelos melhores profissionais da área. Aprenda a escolher alimentos saudáveis e descubra técnicas eficazes para cuidar da sua saúde mental. Todo o nosso conteúdo é confiável e fácil de aplicar. Comece hoje mesmo a transformar sua vida!</p>
                </div>
                    <div>
                        <img className='w-[70%] m-auto' src={ModelFeed} alt="" />
                    </div>
            </div>

            <div className=' flex items-center justify-center gap-96 w-full h-24 mt-16 '>
                <button className='w-[15%] h-10 bg-[#5D59FF] rounded-full text-[#fff]'>Acompanhe aqui!</button>
            </div>

            <div>
                <img src={PostFeed} alt="" />
            </div>

            <div className='flex justify-center mr-16 mt-16'>
                <img className='w-[45%]'  src={ArcoFeed} alt="" />
            </div>

            <div className='flex justify-center'>
                <img src={WaveSobre} alt="" />
            </div>
        </div>
    )
}
export default Feed