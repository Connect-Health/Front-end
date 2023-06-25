import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

import FormSection from "./FormSection";
import AnswerSection from "./AnswerSection";
import axios from "axios";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ChaveBot, setChaveBot] = useState("");
  const [speechResponse, setSpeechResponse] = useState("");

  useEffect(() => {
    axios
      .get("https://connect-health.up.railway.app/chat")
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

  const generateResponse = async (newQuestion, setNewQuestion) => {
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
        questions: ['profissional', 'profissional de psicologia', 'profissional de nutrição', 'como encontrar um profissional de psicologia', 'como encontrar um profissional de nutrição'],
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
        questions: ['o que você acha do joquina', 'joca', 'joquinha'],
        response: 'É um parceiro de estudo e é legalzinho, mas eu sou bem melhor e mais desenvolvida',
      },
      {
        questions: ['você é uma mulher'],
        response: 'Bom! eu sou uma inteligência artificial, ou seja, não possuo um genero',
      },
      {
        questions: ['quem te criou'],
        response: 'fui criada pelos doctor devs, os criadores da Connect Health',
      },
      {
        questions: ['qual seu nome'],
        response: 'meu nome é Débi, fui inspirada na professora Débora do Instituto Proa',
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
      }
    ];

    const voices = speechSynthesis.getVoices();
    const lowerCaseQuestion = newQuestion.toLowerCase();


    for (const mapping of questionMappings) {
      const matchedQuestion = mapping.questions.find(question => lowerCaseQuestion.includes(question));
      if (matchedQuestion) {
        setStoredValues([
          {
            question: newQuestion,
            answer: mapping.response,
          },
          ...storedValues,
        ]);
        setNewQuestion("");
        setSpeechResponse(mapping.response);
        return;
      }
    }

    setStoredValues([
      {
        question: newQuestion,
        answer: 'Desculpe, não entendi sua pergunta. Por favor, faça uma pergunta diferente.',
      },
      ...storedValues,
    ]);
    setNewQuestion("");
    setSpeechResponse('Desculpe, não entendi sua pergunta. Por favor, faça uma pergunta diferente.');
  };

  const getOpenAIResponse = async (question) => {
    const options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/"],
      prompt: question,
    };

    const response = await openai.createCompletion(options);
    return response.data.choices[0].text;
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
      if (speechResponse !== "") {
        const speech = new SpeechSynthesisUtterance(speechResponse);
        speech.voice = speechSynthesis.getVoices().find(
        (voice) => voice.voiceURI === 'Microsoft Maria - Portuguese (Brazil)');
        speech.rate = 1.5; // Ajuste o valor conforme necessário (1.5 é um pouco mais rápido)
        window.speechSynthesis.speak(speech);
  setSpeechResponse("");
      }
    }, [speechResponse]);

  return (
    <div id="chatbot" className="chatbot  bg-[#ebeff3]/40 border border-white rounded backdrop-blur w-[25vw] max-md:w-auto  fixed z-50 right-1 bottom-1">
      {isOpen ? (
        <div className="max-md:w-screen h-[60vh] max-md:h-[90vh] w-[25vw]">
          <div
            onClick={toggleChatbot}
            className=" max-md:w-[100%]   bg-gradient-to-l from-[#1eec9a] to-[#13d6dd] border border-white rounded flex justify-between items-center py-1 px-3"
          >
            <p className="text-lg  text-white z-50">Débi</p>
            <AiOutlineArrowDown className="text-2xl text-white" />
          </div>
          <div id="scroll-bot" className=" mb-10  max-md:w-screen">
            {storedValues.length === 0 && (
              <p className="bg-white w-[95%] m-auto rounded absolute bottom-12 p-1 pr-0 left-1/2 -translate-x-1/2">
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
            <FormSection generateResponse={generateResponse} />
          </div>
        </div>
      ) : (
        <div
          onClick={toggleChatbot}
          className="w-full  bg-gradient-to-l from-[#1eec9a] to-[#13d6dd] border border-white rounded flex justify-between items-center py-1 px-3 "
        >
          <p className="text-lg  text-white">Débi</p>
          <AiOutlineArrowUp className="text-2xl text-white" />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
