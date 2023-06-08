import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill, RiLinkedinFill } from "react-icons/ri";
import lockericon from "../../../assets/lockericon.png";
import mailicon from "../../../assets/mailicon.png";
import BgLogin from "../../../assets/bglogin.png";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect,useState } from "react";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  useEffect(() => {
    gapi.load("auth2", () => {
      gapi.auth2.init({client_id: "1030844756804-m94rijfndnkioau7eph93tf51rmcukqk.apps.googleusercontent.com"});
    });
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (

    <div className="flex">
        <div className="flex flex-col items-center w-[40%] justify-center gap-6 max-md:w-full relative z-0  ">
        <h1 className="font-extrabold text-4xl max-md:text-2xl">Bem Vindo(a)!</h1>
        <h1 className="font-extrabold text-1xl">É um <Link to="/login" className="text-azulsite">cliente</Link>? </h1>
        <div className="flex mr-5">
          <img
            className="relative left-10 top-2 w-6 h-6"
            src={mailicon}
            alt="icone do email"
          />
          <input
            type="text"
            value={email}
            className="border-solid border-2 border-gradi/30 rounded-3xl w-80 h-10 pl-11 required "
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex mr-5">
          <img
            className="relative left-10 top-2 w-6 h-6"
            src={lockericon}
            alt="icone do email"
          />
          <input
            type="password"
            value={password}
            className="border-solid border-2 border-gradi/30 rounded-3xl w-80 h-10 pl-11 required "
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" flex items-center justify-center bg-azulsite border-solid border-2 border-gradi/30 rounded-3xl w-80 h-12"
        >
          <h1 className="text-white text-1xl">Entrar</h1>
        </button>
        <button type="submit" className="text-gradi/70">
          <h1 className="text-gradi/80 text-1x1 font-bold">Esqueci a senha</h1>
        </button>
        <div className="flex">
          <GoogleLogin
            clientId="1030844756804-m94rijfndnkioau7eph93tf51rmcukqk.apps.googleusercontent.com"
              render={renderProps => (
                <FcGoogle className="text-5xl pl-2" onClick={renderProps.onClick} disabled={renderProps.disabled}></FcGoogle>)}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            />
          <Link to="/">
            <RiFacebookCircleFill className="text-azulsite text-5xl" />
          </Link>
          <Link to="/">
            {" "}
            <RiLinkedinFill className="text-azulsite text-5xl " />
          </Link>
        </div>
        <h1 className="text-1xl font-semibold mt-3">
          Não tem conta?{" "}
          <Link to="/register" className="text-azulsite">
            Registre-se
          </Link>
        </h1>
      </div>
        {/*inicio da area da imagem lateral*/}
      <div className=" flex w-3/5 h-screen  bg-cover bg-center items-center  max-md:w-0 ">
        <img src={BgLogin} alt="" className="absolute -z-10 w-3/5 max-md:w-full max-md:h-screen max-md:z-0" />
        <Link to="/">
          <AiOutlineArrowLeft className="absolute text-azulsite text-5xl top-3 left-3 max-md:text-3xl" />
        </Link>
        <div className="flex flex-col ml-60 max-md:hidden">
          <h1 className="font-bold text-4xl text-white text-right">Connect Health</h1>
          <h2 className="text-2xl text-white mt-2 ">
            Mantenha-se conectado com sua saúde!
          </h2>
        </div>
      </div>
      {/* Fim da área da imagem lateral*/}
      
    </div>
  );
}
export default Login;
