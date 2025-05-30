import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import AnswerSection from "./AnswerSection";
import FormSection from "./FormSection";
import React, { useEffect, useState } from "react";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const [ChaveBot, setChaveBot] = useState("");
  const [speechResponse, setSpeechResponse] = useState("");
  const [isListening, setIsListening] = useState(false); // Add isListening state variable


  useEffect(() => {
    axios
      .get("https://connecthealth-backend.onrender.com/chat")
      .then(function (response) {
        const chave = response.data;
        const chaveBotSemUltimaLetra = chave.slice(0, -1);
        setChaveBot(chaveBotSemUltimaLetra);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const configuration = new Configuration({
    apiKey: ChaveBot,
    language: "pt-br",
    engine: "text-davinci-003",
  });

  const openai = new OpenAIApi(configuration);

  const [storedValues, setStoredValues] = useState([]);

  const startListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "pt-BR"; // Define o idioma para português brasileiro
    recognition.start();

    recognition.onresult = function (event) {
      const speechResult = event.results[0][0].transcript;
      generateResponse(speechResult);
      setIsListening(false);
    };

    recognition.onend = function () {
      setIsListening(false);
    };
  };

  const generateResponse = async (newQuestion) => {
    const questionMappings = [
      {
        questions: ['connect', 'o que é connect health', 'connect health'],
        response: 'A Connect Health é uma multiplataforma com foco na saúde digital que explora a área da Psicologia e Nutrição.',
      },
      {
        questions: ['feed', 'como acessar o feed de noticias'],
        response: 'Primeiramente, você deve ter efetuado login. Caso já esteja logado, basta ir ao menu superior da página inicial e clicar em "Feed de Notícias".',
      },
      {
        questions: ['profissional', 'profissional de psicologia', 'profissional de nutrição', 'como encontrar um profissional de psicologia', 'como encontrar um profissional de nutrição', 'como encontrar profissionais'],
        response: 'Você pode encontrar profissionais tanto da psicologia quanto da nutrição de diversas formas na plataforma. Uma delas é através da área específica de cada um. Também é possível encontrar pelo Feed de Notícias, onde estão os profissionais mais recomendados.',
      },
      {
        questions: ['olá', 'oi', 'oie', 'ola'],
        response: 'Oie sou Débi, uma inteligência artificial feita para te ajudar! me pergunte algo',
      },
      {
        questions: ['tudo bem', 'como vai', 'como está'],
        response: 'eu estou bem e você?',
      },
      {
        questions: ['estou bem', 'bem', 'estou otimo'],
        response: 'que bom, como posso te ajudar?',
      },
      {
        questions: ['obrigada', 'obgd', 'muito obrigada', 'obrigado', 'muito obrigado'],
        response: 'Fico feliz em ter ajudado, volte sempre!',
      },
      {
        questions: ['o que você acha do joquina', 'joca', 'joquinha'],
        response: 'É um parceiro de estudo e é legalzinho, mas eu sou bem melhor e mais desenvolvida',
      },
      {
        questions: ['você é uma mulher', 'você é um homem', 'você é homem', 'você é mulher'],
        response: 'Bom! eu sou uma inteligência artificial, ou seja, não possuo um genero',
      },
      {
        questions: ['quem te criou', "quem te fez", "quem é seu criador", "quem é seu pai", "quem é sua mãe"],
        response: 'Fui criada pelos doctor devs, os criadores da Connect Health',
      },
      {
        questions: ['qual o seu nome'],
        response: 'Meu nome é Débi, fui inspirada na professora Débora do Instituto Proa',
      },
      {
        questions: ['nutrição', 'nutricao', 'nutriçao'],
        response: 'A nutrição é uma área da saúde pouco valorizada pelos brasileiros, mas que tem grande importância na vida humana. Cuide da sua alimentação!',
      },
      {
        questions: ['psicologia'],
        response: 'A psicologia é muito importante para todos, através dela, podemos se previnir de muitas outra doenças. Conheça nossa equipe de profissionais!',
      },
      {
        questions: ['caro', 'planos caros', 'consultas caras', ],
        response: 'Deixe-me te fazer uma pergunta. Quanto vale sua saúde e seu bem-estar hoje? pense melhor nisso!',
      },
      {
        questions: ['como agendar uma consulta', 'quero agendar uma consulta', 'como marcar uma consulta'],
        response: 'Para agendar uma consulta, você pode acessar a área de agendamentos na plataforma. Lá você encontrará os profissionais disponíveis e poderá escolher a data e hora que melhor se encaixam na sua agenda.',
      },
      {
        questions: ['posso cancelar uma consulta', 'como cancelar uma consulta agendada', 'posso cancelar a consulta'],
        response: 'Sim, é possível cancelar uma consulta agendada. Basta acessar a área de agendamentos e selecionar a opção de cancelamento. No entanto, verifique as políticas de cancelamento da Connect Health para evitar possíveis taxas ou penalidades.',
      },
      {
        questions: ['qual a duração de uma consulta', 'quanto tempo dura uma consulta'],
        response: 'A duração de uma consulta pode variar dependendo do profissional e do tipo de serviço. Em geral, as consultas costumam ter duração média de 30 minutos a 1 hora. No entanto, é sempre bom verificar com o profissional para ter essa informação precisa.',
      },
      {
        questions: ['quais formas de pagamento são aceitas', 'como posso pagar pelas consultas', "forma de pagamento"],
        response: 'A Connect Health aceita diferentes formas de pagamento para as consultas, como cartões de crédito, transferências bancárias e boletos. Durante o processo de agendamento, você poderá selecionar a opção de pagamento de sua preferência.',
      },
      {
        questions: ['existe reembolso para as consultas', 'posso ser reembolsado pelas consultas'],
        response: 'O reembolso das consultas pode variar dependendo do plano contratado e das políticas de reembolso da Connect Health. É recomendado entrar em contato com o suporte da plataforma para obter mais informações sobre essa questão.',
      },
      {
        questions: ['o atendimento é online', 'as consultas são virtuais', 'como funciona o atendimento'],
        response: 'Sim, o atendimento na Connect Health é totalmente online. As consultas são realizadas de forma virtual, por meio de videochamadas seguras dentro da plataforma. Isso proporciona conveniência e flexibilidade para os pacientes.',
      },
      {
        questions: ['posso agendar consultas com mais de um profissional', 'é possível ter mais de um profissional de saúde', 'posso ter acompanhamento de nutricionista e psicólogo ao mesmo tempo'],
        response: 'Sim, você pode agendar consultas com mais de um profissional na Connect Health. Se você precisa de acompanhamento tanto de um nutricionista quanto de um psicólogo, por exemplo, é possível agendar consultas separadas com cada um deles.',
      },
      {
        questions: ['como faço para trocar de profissional', 'posso mudar de psicólogo ou nutricionista', 'quero trocar meu profissional de saúde'],
        response: 'Se você deseja trocar de profissional, basta entrar em contato com o suporte da Connect Health. Eles poderão auxiliá-lo no processo de alteração e ajudar a encontrar um novo profissional que atenda às suas necessidades.',
      },
      {
        questions: ['como funciona o Feed de Notícias', 'o que encontro no Feed de Notícias', 'como posso utilizar o Feed de Notícias'],
        response: 'O Feed de Notícias é uma seção da plataforma onde você encontrará artigos, dicas, novidades e informações relevantes sobre saúde mental, nutrição e bem-estar. Você pode utilizá-lo para se manter atualizado e encontrar conteúdos úteis relacionados à sua saúde.',
      },
      {
        questions: ['como faço para entrar em contato com o suporte', 'preciso de ajuda, como entro em contato', 'onde encontro o suporte', 'como entro em contato', 'Contato'],
        response: 'Para entrar em contato com o suporte da Connect Health, você pode acessar a seção de Contato. Para obter assistência personalizada.',
      },
      {
        questions: ['instagram', 'instagram da Connect Health', 'Rede Sociais', 'rede social'],
        response: 'Aqui está o instagram da Connect Health @cnnthealth',
      },
      {
        questions: ["posso agendar uma consulta de emergência na Connect Health", "consultas de urgência", "atendimento imediato"],
        response: "A Connect Health não oferece consultas de emergência ou atendimento imediato. Caso você esteja passando por uma emergência médica ou psicológica, é recomendado entrar em contato com serviços de emergência locais ou buscar atendimento presencial."
      },
      {
        questions: ["A Connect Health é uma plataforma de saúde", "A Connect Health oferece serviços médicos"],
        response: "Sim, a Connect Health é uma plataforma de saúde que oferece serviços de psicologia e nutrição."
      },
      {
        questions: ["a Connect Health oferece programas de bem-estar", "programas de saúde na plataforma", "cuidados holísticos", "Cuidados"],
        response: "Sim, a Connect Health oferece programas de bem-estar que abrangem diferentes aspectos da saúde, como alimentação saudável, atividade física, gestão do estresse e outros cuidados holísticos. Esses programas visam promover um estilo de vida equilibrado e ajudar os usuários a alcançarem seus objetivos de saúde e bem-estar."
      },
      {
        questions: ["posso solicitar reembolso caso não fique satisfeito com o serviço", "política de reembolso da Connect Health", "garantia de satisfação"],
        response: "As políticas de reembolso da Connect Health podem variar. É recomendado entrar em contato com o suporte da plataforma ou verificar os termos e condições específicos relacionados ao reembolso para obter informações mais detalhadas sobre a política de reembolso da Connect Health."
      },
      {
        questions: ["planos", "quais são os planos que a connect oferece", "planos disponiveis", ],
        response: "A Connect Health possui três tipos de planos: Vitalidade, Equilíbrio e Excelência. Cada um deles possui suas qualidades, basta averiguar qual mais se adequa a você."
      },
      {
        questions: ["plano vitalidade", "vitalidade", "o que tem o plano vitalidade"],
        response: "O plano vitalidade custa 50 reais mensalmente nele você tera direito a 2 consultas com Psicólogo, 1 consulta com Nutricionista e todas elas terá uma duração de 30 minutos."
      },
      {
        questions: ["eventos", "como funciona os eventos", "para que serve a página eventos"],
        response: "Os eventos da connect são para empresas que contrata nossos serviços, e nós contatamos profissionais da nossa plataforma para atender as nessecidades da empresa.",
      },
      {
        questions: ["plano equilibrio", "equilibrio", "o que tem o plano equilibrio"],
        response: "O plano Equilíbrio custa 100 reais mensalmente nele você tera direito a 4 consultas com Psicólogo, 2 consulta com Nutricionista e todas elas terá uma duração de 45 minutos."
      },
      {
        questions: ["plano excelência", "excelência", "o que tem o plano excelência"],
        response: "O plano Exelência custa 150 reais mensalmente nele você tera direito a 5 consultas com Psicólogo, 2 consulta com Nutricionista e todas elas terá uma duração de 60 minutos.",
      },
      {
        questions: ["demoday", "Demoday"],
        response: "Sejam muito bem-vindos ao Demoday! Espero que gostem e aproveitem bastante!!",
      },
      {
        questions: [""],
        response: "",
      },
      {
        questions: [""],
        response: "",
      },
      {
        questions: [""],
        response: "",
      },
      {
        questions: [""],
        response: "",
      },
      {
        questions: [""],
        response: "",
      },
      {
        questions: [""],
        response: "",
      },
      {
        questions: [""],
        response: "",
      },

    ];
    
  
    const voices = speechSynthesis.getVoices();
    const lowerCaseQuestion = newQuestion.toLowerCase();

    for (const mapping of questionMappings) {
      const matchedQuestion = mapping.questions.find((question) =>
        lowerCaseQuestion.includes(question)
      );
      if (matchedQuestion) {
        setStoredValues([
          {
            question: newQuestion,
            answer: mapping.response,
          },
          ...storedValues,
        ]);
        setSpeechResponse(mapping.response);
        return;
      }
    }

    setStoredValues([
      {
        question: newQuestion,
        answer:
          "Desculpe, não entendi sua pergunta. Por favor, faça uma pergunta diferente.",
      },
      ...storedValues,
    ]);
    setSpeechResponse(
      "Desculpe, não entendi sua pergunta. Por favor, faça uma pergunta diferente."
    );
  };

  


    const toggleChatbot = () => {
    if (!isOpen) {
      // Abrindo o chatbot
      setIsOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(true);
      setIsOpen(false);
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (speechResponse !== "") {
      const speech = new SpeechSynthesisUtterance(speechResponse);
      speech.voice = speechSynthesis.getVoices().find(
        (voice) => voice.voiceURI === "Microsoft Maria - Portuguese (Brazil)"
      );
      speech.rate = 1.5; // Ajuste o valor conforme necessário (1.5 é um pouco mais rápido)
      window.speechSynthesis.speak(speech);
      setSpeechResponse("");
    }
  }, [speechResponse]);

  return (
    <div 
      id="chatbot" 
      className={`fixed z-50 right-1 bottom-1 transition-all duration-300 ease-in-out ${
        isOpen || isAnimating
          ? "translate-y-0 opacity-100" 
          : "translate-y-[calc(100%-40px)] opacity-90"
      }`}
    >
      {(isOpen || isAnimating) && (
        <div 
          className={`bg-[#ebeff3]/80 border-[0.1px] border-[#c5c5c570] rounded backdrop-blur w-[25vw] max-md:w-screen h-[62vh] max-md:h-[90vh] transition-all duration-300 ease-in-out ${
            !isOpen && isAnimating ? "animate-slide-down" : "animate-slide-up"
          }`}
          onAnimationEnd={() => {
            if (!isOpen) setIsAnimating(false);
          }}
        >
          <div
            onClick={toggleChatbot}
            className="max-md:w-[100%] bg-gradient-to-l from-[#877fc0] to-[#6ad3ab] border-[0.1px] border-[#c4c4c470] rounded flex justify-between items-center py-1 px-3"
          >
            <p className="text-lg text-white z-50">Débi</p>
            <AiOutlineArrowDown className="text-2xl text-white" />
          </div>
          <div
            id="scroll-bot"
            className=" mb-10  max-md:w-screen"
          >
            {storedValues.length === 0 && (
              <p className="bg-white w-[90%] text-black m-auto rounded absolute bottom-14 p-1 pr-0 left-1/2 -translate-x-1/2 text-sm">
                Olá! Sou a Débi a assistente virtual da{" "}
                <span className="font-semibold">Connect Health</span>. Estou
                aqui para responder às suas perguntas sobre saúde e bem-estar.
                Pode me perguntar qualquer coisa! 😊
              </p>
            )}
            {storedValues.length > 0 && (
              <AnswerSection
                storedValues={storedValues}
                setSpeechResponse={setSpeechResponse}
              />
            )}
          
            <FormSection 
            generateResponse={generateResponse}
            startListening={startListening} 
            isListening={isListening}
          />

          </div>
        </div>
      )} {!isOpen && !isAnimating && (
        <div
          onClick={toggleChatbot}
          className="bg-gradient-to-l from-[#877fc0] to-[#6ad3ab] rounded flex justify-between items-center py-1 px-3 w-[25vw] max-md:w-[90vw]"
        >
          <p className="text-xl text-white">Débi</p>
          <AiOutlineArrowUp className="text-2xl font-extrabold text-white" />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
