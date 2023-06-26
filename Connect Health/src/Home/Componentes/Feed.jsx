import ModelFeed from '../../../assets/modelofeed.png'
import PostFeed from '../../../assets/postfeed.svg'
import ArcoFeed from '../../../assets/arcofeed.svg'
import WaveFeed from '../../../assets/wavefeed.svg'
import { Link } from 'react-router-dom'


function Feed(){
    return(
        <div id="feed">
            <div className='flex justify-evenly gap-36
            max-md:flex-col max-md:gap-6
            '>
                <div className='w-[70%] mt-10 ml-36
                max-md:mt-10 max-md:m-auto max-md:w-[75%]'>
                        <h2 className='text-[#5D59FF] font-bold text-4xl
                        max-md:text-2xl max-md:text-center
                        '>Feed</h2>
                        <p className='pt-10
                        max-md:w-[100%] max-md:text-[14px]
                        '>Fique em forma, cuide da sua mente e melhore sua qualidade de vida com nossas dicas exclusivas de nutrição e psicologia, oferecidas pelos melhores profissionais da área. Aprenda a escolher alimentos saudáveis e descubra técnicas eficazes para cuidar da sua saúde mental. Todo o nosso conteúdo é confiável e fácil de aplicar. Comece hoje mesmo a transformar sua vida!</p>
                </div>
                    <div>
                        <img className='w-[45%] m-auto
                        max-md:mt- max-md:w-[70%]
                        ' src={ModelFeed} alt="" />
                    </div>
            </div>

            <div className=' flex items-center justify-center gap-96 w-full h-24 mt-16  '>
                <Link to='/feed' className='w-[15%] p-2 text-center bg-[#5D59FF] rounded-full text-[#fff]
                max-md:w-[35%] max-md:mr-2 max-md:text-[13px]
                '>Acompanhe aqui!</Link>
            </div>

            <div>
                <img src={PostFeed} className='w-full' alt="" />
            </div>

            <div className='flex justify-center w-full mr-16 mt-16  '>
                <img className='w-[45%] max-md:hidden hover:translate-y-1 transition-all duration-150 hover:animate-pulse '  src={ArcoFeed} alt="" />
            </div>

            <div className=''>
                <img className='w-[100%] max-md:mt-20' src={WaveFeed} alt="" />
            </div>
        </div>
    )
}
export default Feed;