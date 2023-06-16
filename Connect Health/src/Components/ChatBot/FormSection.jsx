import { useState } from "react";

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState("");

  return (
    <div className="form-section flex flex-col gap-8 m-auto items-center mt-[25.1%] ">
      <textarea
        rows="5"
        className="form-control bg-azulsite w-[70%] mt-8 h-[15%] pt-5 pl-5 rounded-2xl text-white placeholder:text-white outline-none"
        placeholder="Me pergunte algo..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      ></textarea>
      <button
        className="btn bg-[#7c5afa] p-5 w-[15%] rounded-2xl text-white "
        onClick={() => generateResponse(newQuestion, setNewQuestion)}
      >
        Gerar Resposta 🤖
      </button>
    </div>
  );
};

export default FormSection;
