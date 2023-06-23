import React from "react";
import { Configuration, OpenAIApi } from "openai";

import FormSection from "./FormSection";
import AnswerSection from "./AnswerSection";
import axios from "axios";

import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ChaveBot, setChaveBot] = useState("");
  axios
    .get("https://connect-health.up.railway.app/chat")
    .then(function (response) {
      const chave = response.data;
      const chaveBotSemUltimaLetra = chave.slice(0, -1); // Usando o método slice
      setChaveBot(chaveBotSemUltimaLetra);
    })
    .catch(function (error) {
      // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
      console.log(error);
    });

  const configuration = new Configuration({
    apiKey: ChaveBot,
    language: "pt-br",
    engine: "text-davinci-003",
  });

  const openai = new OpenAIApi(configuration);

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    let responseText = "";
    const perguntasERespostas = [
      {
        perguntas: ["o que é connect health", "o que é connect"],
        resposta:
          "A Connect Health é uma multiplataforma com foco na saúde digital que explora a área da Psicologia e Nutrição.",
      },
      {
        perguntas: ["qual é o objetivo da connect health"],
        resposta:
          "O objetivo da Connect Health é fornecer uma solução abrangente para cuidados de saúde digital, facilitando o acesso à assistência médica, psicológica e nutricional.",
      },
      {
        perguntas: ["quais são os serviços oferecidos pela connect health?"],
        resposta:
          "A Connect Health oferece serviços de psicologia, nutrição e saúde.",
      },
      {

      }
      // Adicione mais perguntas e respostas aqui
    ];

    const lowercaseQuestion = newQuestion.toLowerCase();

    for (const { perguntas, resposta } of perguntasERespostas) {
      for (const pergunta of perguntas) {
        if (lowercaseQuestion.includes(pergunta.toLowerCase())) {
          responseText = resposta;
          break; // Encerra o loop interno quando uma correspondência for encontrada
        }
      }
      if (responseText) {
        break; // Encerra o loop externo quando uma correspondência for encontrada
      }
    }

    if (!responseText) {
      responseText =
        "Desculpe, não entendi sua pergunta. Por favor, faça uma pergunta diferente.";
    }

    setStoredValues([
      {
        question: newQuestion,
        answer: responseText,
      },
      ...storedValues,
    ]);
    setNewQuestion("");
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

  return (
    <div className="chatbot bg-[#ebeff3]/40 border border-white rounded backdrop-blur w-[25%] fixed z-50 right-1 bottom-1">
      {isOpen ? (
        <div>
          <div
            onClick={toggleChatbot}
            className="w-full  bg-gradient-to-l from-[#1eec9a] to-[#13d6dd] border border-white rounded flex justify-between items-center py-1 px-3"
          >
            <p className="text-lg  text-white">Débinha</p>
            <AiOutlineArrowDown className="text-2xl text-white" />
          </div>
          <div id="scroll-bot" className="h-[60vh] mb-10 overflow-y-scroll">
            {storedValues.length === 0 && (
              <p className="bg-white w-[95%] m-auto rounded absolute bottom-12 p-1 pr-0 left-1/2 -translate-x-1/2">
                Olá! Sou a Débinha, a assistente virtual da{" "}
                <span className="font-semibold">Connect Health</span>. Estou
                aqui para responder às suas perguntas sobre saúde e bem-estar.
                Pode me perguntar qualquer coisa! 😊
              </p>
            )}
            {storedValues.length > 0 && (
              <AnswerSection storedValues={storedValues} />
            )}
            <FormSection generateResponse={generateResponse} />
          </div>
        </div>
      ) : (
        <div
          onClick={toggleChatbot}
          className="w-full  bg-gradient-to-l from-[#1eec9a] to-[#13d6dd] border border-white rounded flex justify-between items-center py-1 px-3"
        >
          <p className="text-lg  text-white">Débinha</p>
          <AiOutlineArrowUp className="text-2xl text-white" />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
