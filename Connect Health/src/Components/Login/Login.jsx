
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Login (){
    return (
        <div className=" flex w-3/5 h-screen bg-bglogin bg-cover bg-center items-center">
            <Link to='/'>
            <AiOutlineArrowLeft  className='absolute text-white text-5xl top-3 left-3'/>
            </Link>
            <div className="flex flex-col ml-20">
                <h1 className="font-bold text-4xl text-white">Connect Health</h1>
                <h2 className="text-2xl text-white mt-2">Mantenha-se conectado com sua saúde!</h2>
            </div>

        </div>

    )
}
export default Login