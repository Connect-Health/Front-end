import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";

function Register() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [urlAvatar, setUrlAvatar] = useState("");
  const [urlCertificado, setUrlCertificado] = useState("");
  const [senha, setSenha] = useState("");
  const [duracao, setDuracao] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState(1);
  const [especialidades, setEspecialidades] = useState(1);
  const [generoId, setGeneroId] = useState(1);

  const enviarRegistro = async () => {
    try {
      const dados = {
        nome,
        sobrenome,
        telefone,
        dataNascimento,
        cpf,
        endereco: {
          cep,
          logradouro,
          bairro,
          cidade,
          uf,
          complemento,
          numero,
        },
        email,
        urlAvatar,
        urlCertificado,
        duracao,
        preco,
        descricao,
        areaAtuacao: {
          areaId: areaAtuacao,
        },
        especialidades: [{}],
        senha,
        genero: {
          generoId,
        },
      };

      console.log(dados);

      const response = await axios.post(
        "https://connect-health.up.railway.app/profissional",
        dados
      );
      setOpenSnackbar(true);
      setSnackbarMessage("Cadastro Concluído");
      setTimeout(() => {
        navigate("/loginprof");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkCEP = async () => {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        setLogradouro(response.data.logradouro);
        setBairro(response.data.bairro);
        setCidade(response.data.localidade);
        setUf(response.data.uf);
      } catch (error) {
        alert("CEP não encontrado");
      }
    };
    if (cep.length === 8) {
      checkCEP();
    }
  }, [cep]);

  return (
    <div className="">
      <Link to="/">
        <AiOutlineArrowLeft className="absolute text-azulsite text-3xl top-5 left-5" />
      </Link>
      <div className="flex flex-col mt-4 mb-14 max-md:justify-center ">
        <h1 className="font-extrabold text-5xl text-azulsite text-center mb-5 max-md:text-2xl">
          Registre-se!
        </h1>
        <Link to="/register">
          <p className="font-bold text-2xl text-center">
            É um <span className="text-azulsite">cliente?</span>?
          </p>
        </Link>
      </div>
      <div className="-mt-5">
        <div className="flex  mx-auto h-auto px-5 py-2 rounded shadow-lg justify-center gap-14 bg-[#ebebeb] max-md:flex-col max-md:items-center max-md:px-0">
          {/*Inicio do Forms */}
          <form className=" flex px-3 py-2 rounded">
            {/* Formatação do forms */}
            <div className=" flex flex-col items-center justify-evenly ">
              <h1 className="text-xl font-bold text-azulsite mb-5">
                Informações pessoais
              </h1>
              {/* Formatação da div dos inputs */}
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">Nome*:</span>
                <input
                  type="text required"
                  id="Nome"
                  name="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Primeiro nome"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              {/* Input Sobrenome */}
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">Sobrenome*:</span>
                <input
                  type="text required"
                  id="Sobrenome"
                  name="Sobrenome"
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                  placeholder="Segundo nome"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              {/* Input telefone */}
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">Telefone*:</span>
                <input
                  type="text required"
                  id="Telefone"
                  name="Telefone"
                  maxLength={11}
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="11 99999-9999"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              {/* Input Genero */}
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">Genero*:</span>
                <select
                  className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                  onChange={(e) => {
                    const selectedGenero = e.target.value;
                    let id = 0;
                    if (selectedGenero === "Masculino") {
                      id = 1;
                    } else if (selectedGenero === "Feminino") {
                      id = 2;
                    }
                    setGeneroId(id);
                    console.log(generoId);
                  }}
                >
                  {" "}
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
              </label>

              {/* Input CPF */}
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">CPF*:</span>
                <input
                  type="text required"
                  id="CPF"
                  name="CPF"
                  maxLength={14}
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="000.000.000-00"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  Data de nascimento*:
                </span>
                <input
                  type="date"
                  id="dataaniversario"
                  name="aniversario"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                  className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">E-mail*:</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@gmail"
                  className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  Crie uma senha*:
                </span>
                <input
                  type="password"
                  id="Senha"
                  name="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
            </div>
          </form>
          <form className=" flex w-auto px-3 py-2 rounded">
            <div className=" flex flex-col items-center justify-evenly ">
              {/* Area inputs do profissionais */}
              <h1 className="text-xl font-bold text-azulsite mb-5">
                Informações Profissionais
              </h1>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  {" "}
                  Foto de Perfil*:
                </span>
                <input
                  type="text"
                  id="Avatar"
                  name="Avatar"
                  value={urlAvatar}
                  onChange={(e) => setUrlAvatar(e.target.value)}
                  placeholder="Digite a URL da imagem"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  URL de seu certificado*:
                </span>
                <input
                  type="text"
                  id="Certificado"
                  name="Certificado"
                  value={urlCertificado}
                  onChange={(e) => setUrlCertificado(e.target.value)}
                  placeholder="Digite a URL do certificado"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  Qual seu tempo de consulta?*:
                </span>
                <select
                  className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                  id="duracao"
                  value={duracao}
                  onChange={(e) => setDuracao(e.target.value)}
                >
                  <option value="30">30 Minutos</option>
                  <option value="40">40 Minutos</option>
                  <option value="50">50 Minutos</option>
                  <option value="60">1 hora</option>
                </select>
              </label>
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  Qual o preço da sua consulta?*:
                </span>
                <input
                  type="number"
                  id="Preco"
                  name="Preco"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  placeholder="Max: 100 reais"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>

              <label
                htmlFor="name"
                className="flex flex-col justify-center text-azulsite text-xl mb-3"
                name="descricao"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              >
                <span className="mb-1 text-left text-azulsite text-xl">
                  Nos conte sobre você!*:
                </span>
                <textarea className="w-80 h-36 border border-gray-300 px-3 py-2 rounded max-md:w-full resize-none"></textarea>
              </label>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  Qual a sua area de atuação?*:
                </span>
                <select
                  className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                  name="areaAtuacao"
                  id="areaAtuacao"
                  value={areaAtuacao}
                  onChange={(e) => setAreaAtuacao(e.target.value)}
                >
                  <option value={1}>Psicologia</option>
                  <option value={2}>Nutrição</option>
                </select>
              </label>
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  Quais suas especialidades?*:
                </span>
                <select
                  className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                  name="especialidades"
                  id="especialidades"
                  value={especialidades}
                  onChange={(e) => setEspecialidades(e.target.value)}
                >
                  <option value={1}>Psicologo(o/a)</option>
                  <option value={2}>Nutricionista</option>
                </select>
              </label>
            </div>
          </form>
          <form className=" flex w-auto px-3 py-2 rounded">
            <div className=" flex flex-col items-center justify-evenly ">
              <h1 className="text-xl font-bold text-azulsite mb-5">
                Informações Residenciais
              </h1>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">Endereço*:</span>
                <input
                  type="text required"
                  id="Endereco"
                  name="Endereco"
                  value={logradouro}
                  onChange={(e) => setLogradouro(e.target.value)}
                  placeholder="Rua connect health"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">CEP*:</span>
                <input
                  type="text required"
                  id="CEP"
                  name="CEP"
                  maxLength={11}
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="00000-000"
                  className=" w-80  border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">Cidade* :</span>
                <input
                  type="text required"
                  id="Cidade"
                  name="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="São Paulo"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">Bairro*:</span>
                <input
                  type="text required"
                  id="Logradouro"
                  name="Logradouro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder="00000-000"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3 "
              >
                <span className="mb-1  text-azulsite text-xl">UF*:</span>
                <input
                  type="text required"
                  id="UF"
                  name="UF"
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                  placeholder="SP"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1  text-azulsite text-xl">
                  Complemento:
                </span>
                <input
                  type="text required"
                  id="Complemento"
                  name="Complemento"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                  placeholder="Ap 20 Bloco 2"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>

              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3 "
              >
                <span className="mb-1 text-azulsite text-xl">Número*:</span>
                <input
                  type="text required"
                  id="numero"
                  name="numero"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder="73"
                  className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                />
              </label>
              <label
                htmlFor="name"
                className="flex flex-col text-azulsite text-xl mb-3"
              >
                <span className="mb-1 text-azulsite text-xl">País* :</span>
                <input
                  type="text required"
                  id="numero"
                  name="numero"
                  placeholder="Brasil"
                  disabled
                  className=" w-80 border border-gray-300 px-3 py-2 rounded disabled:bg-gradi/20 max-md:w-full"
                />
              </label>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Enviar"
            onClick={enviarRegistro}
            className="mt-4 mb-10 w-40 bg-azulsite border border-azulsite text-white font-bold px-5 py-3 rounded"
          />
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success">
          <p className="text-center text-lg">Cadastro concluído com sucesso</p>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Register;
