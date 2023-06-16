import React from "react";

const AnswerSection = ({ storedValues }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
     
      <div className="answer-container bg-[#0c74dbd3] w-[85%] ml-[7%] -mt-[25%] p-5 text-white absolute rounded-2xl overflow-scroll">
        {storedValues.map((value, index) => {
          return (
            <div className="answer-section border-b-2 mb-5" key={index}>
              <p className="question">{value.question}</p>
              <p className="answer">{value.answer}</p>
              <div className="copy-icon" onClick={() => copyText(value.answer)}>
                <i className="fa-solid fa-copy"></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnswerSection;
