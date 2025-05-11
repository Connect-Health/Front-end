import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";

const FormSection = ({ generateResponse, startListening, isListening }) => {
  const [newQuestion, setNewQuestion] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateResponse(newQuestion);
      setNewQuestion("");
    }
  };

  const handleMicrophoneClick = () => {
    if (window.webkitSpeechRecognition) {
      startListening();
    } else {
      alert("Seu navegador não suporta reconhecimento de voz. Use Chrome ou Edge.");
    }
  };

  return (
    <div className="flex items-center justify-between w-full absolute bottom-0 p-2">
      <div 
        onClick={handleMicrophoneClick} 
        className={`cursor-pointer ${isListening ? 'animate-pulse' : ''}`}
      >
        <FaMicrophone className={`bg-[#6abbdb] z-30 p-2 rounded text-[2.5rem] text-white ${
          isListening ? 'bg-azulsite' : 'hover:bg-[#0fb9bf]'
        }`} />
      </div>

      <input
        type="text"
        className="form-control bg-[#47ace7] py-2.5 pl-3 w-[80%] rounded-md text-white placeholder:text-white outline-none text-sm"
        placeholder="Me pergunte algo..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className="bg-[#6abbdb] p-2 rounded text-2xl text-white hover:bg-[#0fb9bf] transition-colors"
        onClick={() => {
          generateResponse(newQuestion);
          setNewQuestion("");
        }}
      >
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default FormSection;