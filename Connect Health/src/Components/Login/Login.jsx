import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { RiFacebookCircleFill, RiLinkedinFill } from "react-icons/ri";
import lockericon from "../../../assets/lockericon.png";
import mailicon from "../../../assets/mailicon.png";
import BgLogin from "../../../assets/bglogin.png";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import { Alert } from "@mui/material";
import { AuthContext } from "../../AutoContext/AuthContext";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const {  updateUser } = useContext(AuthContext)

  const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    

    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };

  useEffect(() => {
    gapi.load("auth2", () => {
      gapi.auth2.init({ client_id: "1030844756804-m94rijfndnkioau7eph93tf51rmcukqk.apps.googleusercontent.com" });
    });
  }, []);

  const responseGoogle = (response) => {
    const { email } = response.profileObj;
    fazerLoginGoogle(email);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fazerLogin();
    }
  };

  const fazerLoginGoogle = async (email) => {
    try {
      const response = await axios.post(
        "https://connect-health.up.railway.app/paciente/loginGoogle",
        { email }
      );
  
      if (response.status === 200 && response.data.success === true) {
        updateUser(response.data.paciente)
        localStorage.setItem("user", JSON.stringify(response.data.paciente));
        navigate("/")
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
        "https://connect-health.up.railway.app/paciente/login",
        {email, senha}
      )
      if (response.status === 200 && response.data.success === true) {
        updateUser(response.data.paciente)
        localStorage.setItem("user", JSON.stringify(response.data.paciente));
        navigate("/")
      } else {
        setOpenSnackbar(true);
        
      }
    }  catch (error) {
      console.log("erro durante o login" + error);
    }
  }

  return (
    <div className="flex">
      <div className="flex w-3/5 h-screen bg-cover bg-center items-center max-md:w-0">
        <img src={BgLogin} alt="" className="absolute -z-10 w-3/5 max-md:w-full max-md:h-screen" />
        <Link to="/">
          <AiOutlineArrowLeft className="absolute text-white text-5xl top-3 left-3 max-md:text-3xl" />
        </Link>
        <div className="flex flex-col ml-20 max-md:hidden">
          <h1 className="font-bold text-4xl text-white">Connect Health</h1>
          <h2 className="text-2xl text-white mt-2">
            Mantenha-se conectado com sua saúde!
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center w-[40%] justify-center gap-5 max-md:w-full">
        <h1 className="font-extrabold text-4xl max-md:text-2xl">Bem Vindo(a)!</h1>
        <h1 className="font-extrabold text-1xl">
          É um <Link to="/loginprof" className="text-azulsite max-md:text-white max-md:border-b">Profissional</Link>?
        </h1>
        <div className="flex mr-5">
          <img
            className="relative left-10 top-2 w-6 h-6"
            src={mailicon}
            alt="icone do email"
          />
          <input
            type="text"
            value={email}
            className="border-solid border-2 border-gradi/30 rounded-3xl w-80 h-10 pl-11 required outline-none focus:outline-cor-primaria/20"
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
            className="border-solid border-2 border-gradi/30 rounded-3xl w-80 h-10 pl-11 required outline-none focus:outline-cor-primaria/20 "
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center bg-azulsite border-solid border-2 border-gradi/30 rounded-3xl w-80 h-12"
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
            render={(renderProps) => (
              <FcGoogle
                className="text-5xl pl-3"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              ></FcGoogle>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          <Link to="/">
            <RiFacebookCircleFill className="text-azulsite text-5xl" />
          </Link>
          <Link to="/">
            {" "}
            <RiLinkedinFill className="text-azulsite text-5xl pl-3" />
          </Link>
        </div>
        <h1 className="text-1xl font-semibold mt-3">
          Não tem conta?{" "}
          <Link
            to="/register"
            className="text-azulsite max-md:border-b max-md:border-white max-md:text-white"
          >
            Registre-se
          </Link>
        </h1>
      </div>
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