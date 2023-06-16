import { useState } from "react";

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState("");

  return (
    <div className="form-section flex flex-col gap-4 m-auto items-center mt-[%]">
      <textarea
        rows="5"
        className="form-control bg-azulsite w-[95%] pt-5 pl-5 rounded-2xl text-white placeholder:text-white outline-none"
        placeholder="Ask me anything..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      ></textarea>
      <button
        className="btn bg-[#7c5afa] p-5 w-[95%] rounded-2xl text-white"
        onClick={() => generateResponse(newQuestion, setNewQuestion)}
      >
        Generate Response 🤖
      </button>
    </div>
  );
};

export default FormSection;
