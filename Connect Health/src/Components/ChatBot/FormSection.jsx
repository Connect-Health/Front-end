import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateResponse(newQuestion, setNewQuestion);
      setNewQuestion(""); // Limpar a caixa de texto
    }
  };

  return (
    <div className="flex items-center gap-2 w-full absolute bottom-0">
      <div className="w-14"></div>

      <input
        type="text"
        className="form-control bg-[#47ace7] py-2 pl-5 w-[95%] rounded-lg text-white placeholder:text-white outline-none"
        placeholder="Me pergunte algo..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className="bg-[#13d6dd] p-2 rounded text-2xl"
        onClick={() => {
          generateResponse(newQuestion, setNewQuestion);
          setNewQuestion(""); // Limpar a caixa de texto
        }}
      >
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default FormSection;
