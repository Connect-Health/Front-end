import React from 'react'
import { Configuration, OpenAIApi } from "openai";

import FormSection from "./FormSection";
import AnswerSection from './AnswerSection';
import { Link } from 'react-router-dom';
import axios from 'axios'


import { useState } from "react";
import Header from '../Header';




const Chatbot = () => {

  const [ChaveBot, setChaveBot] = useState("") 
  axios.get('https://connect-health.up.railway.app/chat')
  .then(function (response) {
    const chave = response.data;
      const chaveBotSemUltimaLetra = chave.slice(0, -1); // Usando o método slice
      setChaveBot(chaveBotSemUltimaLetra);
    
  })
  .catch(function (error) {
    // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
    console.log(error);
  })

  const configuration = new Configuration({
    apiKey: ChaveBot,
    language: "pt-br",
    engine: "text-davinci-003",
  });

  const openai = new OpenAIApi(configuration);
  

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    let options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/"],
    };
    
    
    
    let completeOptions = {
      ...options,
      prompt: newQuestion,
    };

    const response = await openai.createCompletion(completeOptions);

    console.log(Chatbot);
    if (response.data.choices) {
      setStoredValues([
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ]);
      setNewQuestion("");
    }
  };

  return (
    <div className='bg-[#ebeff3] h-screen'>
      <div className=''>
        <div className="header-section pt-2">
        <Header
          health="hover:text-azulsite"
          connect="text-azulsite"
          feed="text-black"
        />
          
          {storedValues.length < 1 && (
            <div className=' w-[70%] absolute left-1/2 -translate-x-1/2 bottom-[4rem] flex flex-col-reverse h-2/3 rounded  bg-white m-auto text-center'>
              <p>Estou aguardando a sua pergunta!</p>
            </div>
          )}
        </div>

        <FormSection generateResponse={generateResponse} />

        {storedValues.length > 0 && <AnswerSection storedValues={storedValues} />}
      </div>
    </div>
  )
}

export default Chatbot