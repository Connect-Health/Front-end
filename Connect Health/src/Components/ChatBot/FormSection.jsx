import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateResponse(newQuestion, setNewQuestion);
    }
  };

  return (
    <div className=" flex items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] ">
      <input type="text"
        className="form-control bg-azulsite  py-3 pl-5 w-[95%] rounded-lg text-white placeholder:text-white outline-none focus:border border-white"
        placeholder="Me pergunte algo..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className=" bg-[#7c5afa] p-4 rounded text-white "
        onClick={() => generateResponse(newQuestion, setNewQuestion)}

      >
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default FormSection;
