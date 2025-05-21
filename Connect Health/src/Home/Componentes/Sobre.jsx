import ModelSobre from "../../../assets/modelsobre.svg";
import Logo from "../../../assets/logo_preta.png";
import bgSobre from "../../../assets/bgsobre.svg";
import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <div
        className="w-full mt-10
            max-md:mt-20
            "
      >
        <h3
          className="text-center font-bold text-3xl
                max-md:text-2xl
                "
        >
          Quem somos e por que existimos?
        </h3>
      </div>

      <div
        className="w-[80%] m-auto mt-14 flex items-center gap-[5%] justify-center
            max-md:w-[100%] max-md:flex-col max-md:gap-2 bg-[#f5f8fccb] dark:bg-[#1e1e1e] rounded shadow-md 
            "
      >
        <p
          className=" py-10 px-16 size text-lg bg-[#f8f8f8a3] dark:bg-[#222628] w-[45%] shadow-md rounded
                max-md:w-[90%]  max-md:text-center          
                "
        >
          Nós somos a <span className="font-semibold hover:text-xl transition-all duration-100">Connect Health</span> - uma plataforma 100% digital que oferece
          consultas psicológicas e nutricionais para todos que as necessitam.{" "}
          <br /> <br /> Nosso objetivo é popularizar a
          alimentação saúdavel e a saúde mental, para que todos possam usufruir desta saúde.<br /> <br />Estamos aqui por você. <br /> Descubra como cuidar da sua mente e alimentação com apoio profissional e acolhedor.
        </p>

        <img
          className="w-[45%]
                max-md:w-[100%]
                "
          src={ModelSobre}
          alt=" família unida composta por um homem, uma nulher e uma criança no colo dos dois"
        />
      </div>

      <div className="w-full justify-center flex mt-32">
        <img
          className="w-[5%] dark:invert
                max-md:mt-10 max-md:w-2/12
                "
          src={Logo}
          alt="Logo da Connect"
        />
      </div>

      <div
        className="w-full mt-16
            max-md:mt-24
            "
      >
        <h3 className="text-center font-bold text-3xl text-[#171FDF] dark:text-white">
          Nossos Planos:
        </h3>
      </div>

      {/* Inicos dos cards*/}

      <div
        style={{ backgroundImage: `url(${bgSobre})` }}
        className="mt-44 mb-20 w-full bg-no-repeat bg-cover h-[340px] items-center
            max-md:mt-52 max-md:h-0
            "
      >
        <div
          className="grid grid-cols-3 gap-[2.5%] mx-[5%]  
                max-md:grid-cols-1 max-md:gap-[23%] 
                "
        >
          <div className="bg-[#EBF3FF] dark:bg-[#070a64] h-auto -mt-[35%]  items-center  flex flex-col rounded-2xl gap-8 pb-4 pt-4 drop-shadow-md">
            <h2 className="text-xl text-center font-bold pt-6">
              Plano mensal Vitalidade
              <br /> R$50,00
            </h2>
            <p>Você tem direito a:</p>
            <div className="pb-10">
              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>2 consultas com Psicólogo;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>1 consulta com Nutricionista;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Consultas de 30 minutos; </p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Acesso ao feed de Notícias;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Área de gerenciamento de consultas.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#EBF3FF] dark:bg-[#070a64] items-center h-auto -mt-[35%] flex flex-col rounded-2xl gap-8 pb-4 pt-4 drop-shadow-md">
            <h2 className="text-xl text-center font-bold pt-6">
              Plano mensal Equilíbrio <br /> R$100,00
            </h2>
            <p>Você tem direito a:</p>
            <div className="pb-10">
              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>3 consultas com Psicólogo;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>1 consulta com Nutricionista;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Consultas de 45 minutos; </p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Acesso ao feed de Notícias;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Área de gerenciamento de consultas.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#EBF3FF] dark:bg-[#070a64] items-center h-auto -mt-[35%] flex flex-col rounded-2xl gap-8 pb-4 pt-4 drop-shadow-md">
            <h2 className="text-xl text-center font-bold pt-6">
              Plano mensal Excelência <br /> R$150,00
            </h2>
            <p>Você tem direito a:</p>
            <div className="pb-10">
              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>4 consultas com Psicólogo;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>2 consulta com Nutricionista;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Consultas de 60 minutos; </p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Acesso ao feed de Notícias;</p>
              </div>

              <div className="flex items-center gap-1 justify-center">
                <FaHeartbeat className="text-[4px] " />
                <p>Área de gerenciamento de consultas.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="  w-full mt-10 flex justify-center items-center">
          <Link className="w-[30%]" to="/pagamentos">
            <button className="bg-azulsite w-[100%] text-white p-4 rounded-full">
              Ver Planos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
