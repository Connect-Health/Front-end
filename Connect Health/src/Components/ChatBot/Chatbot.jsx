import React from 'react'
import { Configuration, OpenAIApi } from "openai";

import FormSection from "./FormSection";
import AnswerSection from './AnswerSection';
import { Link } from 'react-router-dom';

import { useState } from "react";
import Header from '../Header';

const Chatbot = () => {
  const configuration = new Configuration({
    apiKey: "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",
    language: "pt-br",
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
    <div className='bg-gradi h-[100%]'>
      <div className=''>
        <div className="header-section pt-2">
        <Header/>
          <div className='w-[25%] m-auto  text-center'>
            <h1 className='font-bold text-xl text-white'>Olá! Sou a Debinha!🤖</h1>
            <p className='text-white'>Como posso te ajudar?</p>
          </div>
          {storedValues.length < 1 && (
            <div className='mt-5 w-[45%] m-auto text-center'>

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