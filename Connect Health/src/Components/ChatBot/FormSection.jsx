import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Microfone } from "./Microfone";

const FormSection = ({ generateResponse, startListening, isListening }) => {
  const [newQuestion, setNewQuestion] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateResponse(newQuestion, setNewQuestion);
    }
  };

  return (
    <div className=" flex items-center gap-2 w-full absolute bottom-0 z-0">
    <div className="w-16 z-0">

    </div>

      <input
        type="text"
        className="form-control bg-[#47ace7]  py-2 pl-5 w-[95%] rounded-lg text-white placeholder:text-white outline-none"
        placeholder="Me pergunte algo..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className=" bg-[#13d6dd] p-2 rounded text-2xl "
        onClick={() => generateResponse(newQuestion, setNewQuestion)}
      >
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default FormSection;
