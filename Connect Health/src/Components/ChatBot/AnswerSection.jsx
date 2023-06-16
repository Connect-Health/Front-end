import React from "react";

const AnswerSection = ({ storedValues }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="">

      <div className="answer-container bg-[#0c74dbd3] w-[70%] ml-[15%] -mt-[35%] p-5 text-white absolute rounded-2xl overflow-y-scroll max-h-[400px]">
        {storedValues.slice(0, 3).map((value, index) => {
          return (
            <div className="answer-section border-b-2 mb-5" key={index}>
              <p className="question font-bold text-xl">{value.question}</p>
              <p className="answer text-right ">{value.answer}</p>
              <div className="copy-icon" onClick={() => copyText(value.answer)}>
                <i className="fa-solid fa-copy"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerSection;
