
import arrow from '../../assets/arrowlogin.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'

function Login(){
    return(
          <div className="flex flex-col justify-center text-left w-3/5 h-screen bg-bglogin bg-cover bg-center">
            <AiOutlineArrowLeft className='text-white text-5xl mt-3 ml-3' />
          <div className="flex flex-col justify-center text-left w-3/5 h-screen">
            <div className="ml-24">
            <h1 className="text-white font-extrabold text-5xl ">Connect Health</h1>
            <h3 className="text-white text-2xl mt-2">Mantenha-se conectado com sua saúde</h3>
            </div>
          </div>
          </div>
    )
}
export default Login