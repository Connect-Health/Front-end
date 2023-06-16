import React from 'react'
import { Configuration, OpenAIApi } from "openai";

import FormSection from "./FormSection";
import AnswerSection from './AnswerSection';

import { useState } from "react";

const Chatbot = () => {
  const configuration = new Configuration({
    apiKey: "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",
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
    <div className=''>
      <div className="header-section mt-10">
        <div className='w-[25%] m-auto  text-center'>
          <h1 className='font-bold text-xl'>Olá! Sou a Debinha!🤖</h1>
          <p>Como posso te ajudar?</p>
        </div>
        {storedValues.length < 1 && (
          <div className='mt-8 w-[45%] m-auto text-center'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit ea corporis. Facilis sunt rerum delectus consectetur animi mollitia officia culpa sit veritatis placeat quae, officiis ipsam omnis rem distinctio?
            </p>
          </div>
        )}
      </div>

      <FormSection generateResponse={generateResponse} />

      {storedValues.length > 0 && <AnswerSection storedValues={storedValues} />}
    </div>
  )
}

export default Chatbot