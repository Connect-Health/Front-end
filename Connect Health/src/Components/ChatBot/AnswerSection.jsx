import React, { useContext } from "react";
import { AiFillCopy } from "react-icons/ai";
import { AuthContext } from "../../AutoContext/AuthContext";

const AnswerSection = ({ storedValues }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const { user } = useContext(AuthContext)
  return (
    <div className="">
      <div id="scroll-bot" className="answer-container bg-[#ffffff] bg-opacity-50 absolute mt-0 overflow-y-scroll snap-center snap-always m-auto p-1 text-white  rounded-2xl flex flex-col-reverse bottom-5">
        {storedValues.map((value, index) => {
          return (
            <div className=" pb-3 pt-3 mb-3 bg-white rounded" key={index}>
              <p className=" font-bold text-black pl-2">{user && user.nome} - {value.question}</p>
              <p className="text-left text-sm border w-fit py-1 px-3 rounded bg-white text-azulsite ">{value.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerSection;
