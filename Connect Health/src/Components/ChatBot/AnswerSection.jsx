import React from "react";
import { AiFillCopy } from "react-icons/ai";

const AnswerSection = ({ storedValues }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="">
      <div id="scroll-bot" className="answer-container bg-[#0c74dbd3] w-[70%] h-[70vh] mt-0 overflow-y-scroll snap-center snap-always m-auto p-5 text-white  rounded-2xl flex flex-col-reverse">
        {storedValues.map((value, index) => {
          return (
            <div className="border-b pb-3 pt-3" key={index}>
              <p className=" font-bold text-xl">{value.question}</p>
              <p className="text-left border w-fit py-1 px-3 rounded bg-white text-azulsite ">{value.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerSection;
