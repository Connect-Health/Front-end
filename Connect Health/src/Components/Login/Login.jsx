
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { RiFacebookCircleFill, RiLinkedinFill } from 'react-icons/ri'
import lockericon from '../../../assets/lockericon.png'
import {FcGoogle} from 'react-icons/fc'
import mailicon from '../../../assets/mailicon.png'
import BgLogin from "../../../assets/bglogin.png"
import { GoogleLogin } from 'react-google-login'


function Login (){

   const  responseGoogle = (response) => {
      console.log(response)
   }

    return (
        <div className='flex'>
              <div className=" flex w-3/5 h-screen  bg-cover bg-center items-center">
                 <img src={BgLogin} alt="" className='absolute -z-10 w-3/5' />
                 <Link to='/'>
                 <AiOutlineArrowLeft  className='absolute text-white text-5xl top-3 left-3'/>
                 </Link>
                    <div className="flex flex-col ml-20">
                       <h1 className="font-bold text-4xl text-white">Connect Health</h1>
                       <h2 className="text-2xl text-white mt-2">Mantenha-se conectado com sua saúde!</h2>
                    </div>
             </div>
             <div className='flex flex-col items-center w-[40%] justify-center gap-6'>
                 <h1 className='font-extrabold text-4xl'>Bem Vindo(a)!</h1>
                   <div className='flex mr-5'>
                       <img className='relative left-10 top-2 w-6 h-6' src={mailicon} alt="icone do email" />
                       <input type='text' className='border-solid border-2 border-gradi/30 rounded-3xl w-80 h-10 pl-11 required '  placeholder='E-mail'/>
                   </div>
                      <div className='flex mr-5'>
                         <img className='relative left-10 top-2 w-6 h-6' src={lockericon} alt="icone do email" />
                         <input type='password' className='border-solid border-2 border-gradi/30 rounded-3xl w-80 h-10 pl-11 required '  placeholder='Senha'/>
                      </div>
                         <button type='submit' className= ' flex items-center justify-center bg-azulsite border-solid border-2 border-gradi/30 rounded-3xl w-80 h-12'>
                           <h1 className='text-white text-1xl'>Entrar</h1>
                         </button>
                         <button type='submit' className= 'text-gradi/70'>
                           <h1 className='text-gradi/80 text-1x1 font-bold'>Esqueci a senha</h1>
                         </button>
                                 <div className='flex'>
                                 <GoogleLogin
                                    clientId="1030844756804-p2rd9igbt60jmlku3f8csn4qimt1svg0.apps.googleusercontent.com"
                                    render={renderProps => (
                                       <FcGoogle className='text-5xl pl-3'  onClick={renderProps.onClick} disabled={renderProps.disabled}></ FcGoogle>
                                    )}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                 />
                                    <Link to='/'><RiFacebookCircleFill className='text-azulsite text-5xl' /></Link>
                                    <Link to='/'> <RiLinkedinFill className='text-azulsite text-5xl pl-3' /></Link>
                                 </div>
                                 <h1 className='text-1xl font-semibold mt-3'>Não tem conta? <Link to='/register' className='text-azulsite'>Registre-se</Link></h1>
                         
             </div>
     </div>

    )
}
export default Login