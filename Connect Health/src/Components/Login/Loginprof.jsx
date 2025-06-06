import { Alert, Snackbar } from "@mui/material";
import axios from 'axios';
import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill, RiLinkedinFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import BgLogin from "../../../assets/bglogin.png";
import lockericon from "../../../assets/lockericon.png";
import mailicon from "../../../assets/mailicon.png";

import { useContext } from "react";
import { AuthContext } from "../../AutoContext/AuthContext";



function Login() {
    const navigate = useNavigate();

    const { updateUser } = useContext(AuthContext);

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        fazerLogin();
      }
    };

  useEffect(() => {
    gapi.load("auth2", () => {
      gapi.auth2.init({client_id: "1030844756804-m94rijfndnkioau7eph93tf51rmcukqk.apps.googleusercontent.com"});
    });
  }, []);

  const responseGoogle = (response) => {
    const { email } = response.profileObj;
  
    fazerLoginGoogle(email);
  };
  
  const fazerLoginGoogle = async (email) => {
    try {
      const response = await axios.post(
        "https://connecthealth-backend.onrender.com/profissional/loginGoogle",
        { email }
      );
  
      if (response.status === 200 && response.data.success === true) {
        updateUser(response.data.profissional)
        localStorage.setItem("user", JSON.stringify(response.data.profissional));
        navigate("/perfil_nutri")
      } else {
        setSnackbarMessage("Email não autorizado");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.log("Erro durante o login:", error);
    }
  };

  const fazerLogin = async () => {
    try {
      const response = await axios.post(
        "https://connecthealth-backend.onrender.com/profissional/login",
        {email, senha}
      )
      if (response.status === 200 && response.data.success === true) {
        updateUser(response.data.profissional)
        localStorage.setItem("user", JSON.stringify(response.data.profissional));

        if (response.data.profissional.areaAtuacao.nome === "Nutricionista"){
          navigate("/perfil_nutri")
        } else if (response.data.profissional.areaAtuacao.nome === "Psicologo") {
          navigate("/perfil_psi")
        }
      } else {
        setOpenSnackbar(true);
      }
    }  catch (error) {
      console.log("erro durante o login" + error);
    }
  }

  return (
    <div className="flex max-md:h-fit">
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
            value={senha}
            className="border-solid border-2 border-gradi/30 rounded-3xl w-80 h-10 pl-11 required "
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          type="submit"
          className=" flex items-center justify-center bg-azulsite border-solid border-2 border-gradi/30 rounded-3xl w-80 h-12"
          onClick={fazerLogin}
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
          <Link to="/registerprof" className="text-azulsite">
            Registre-se
          </Link>
        </h1>
      </div>
        {/*inicio da area da imagem lateral*/}
      <div className=" flex w-3/5 h-screen  bg-cover bg-center items-center  max-md:w-0 ">
        <img src={BgLogin} alt="" className="absolute -z-10 w-3/5 max-md:w-full max-md:h-screen max-md:z-0 max-md:hidden" />
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{vertical: 'top', horizontal:'center'}}
      >
         <Alert severity="error"><p className="text-center text-lg">Erro ao fazer login. Verifique suas credenciais.</p></Alert>
      </Snackbar>
    </div>

    
  );
}
export default Login;
