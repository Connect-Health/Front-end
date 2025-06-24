import {
  ChevronDown,
  ChevronUp,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://connecthealth-backend.onrender.com/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage }),
        }
      );
      const data = await response.json();

      setMessages((prev) => [...prev, { from: "debi", text: data.response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "debi", text: "Desculpe, ocorreu um erro. Tente novamente." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  const toggleChatbot = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsAnimating(true);
      setIsClosing(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    } else {
      setIsAnimating(true);
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
        setIsClosing(false);
      }, 300);
    }
  };

  return (
    <div
      id="chatbot"
      className={`fixed z-50 right-6 bottom-6 transition-all duration-500 ease-in-out ${
        isOpen || isAnimating
          ? "max-md:left-4 max-md:right-4 translate-y-0 opacity-100"
          : "translate-y-[calc(100%-60px)] opacity-95"
      }`}
    >
      {(isOpen || isAnimating) && (
        <div
          className={`bg-white/95 backdrop-blur-xl border border-[#c5c5c570] rounded-2xl shadow-2xl w-96 max-md:w-[calc(100vw-2rem)] h-[32rem] max-md:h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out transform ${
            isClosing
              ? "scale-95 opacity-0 translate-y-4"
              : "scale-100 opacity-100 translate-y-0"
          } flex flex-col`}
        >
          {/* Header */}
          <div
            onClick={toggleChatbot}
            className="bg-gradient-to-l from-[#877fc0] to-[#6ad3ab] rounded-t-2xl flex justify-between items-center py-4 px-6 cursor-pointer hover:shadow-lg transition-all duration-300 flex-shrink-0"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Débi</p>
                <p className="text-xs text-white/80">Assistente Virtual</p>
              </div>
            </div>
            <ChevronDown className="w-6 h-6 text-white hover:scale-110 transition-transform duration-200" />
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#c5c5c5] scrollbar-track-transparent">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-l from-[#877fc0] to-[#6ad3ab] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#6b7280] text-sm">
                  Olá! Como posso ajudá-lo hoje?
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.from === "user"
                      ? "bg-gradient-to-l from-[#877fc0] to-[#6ad3ab] text-white rounded-br-md"
                      : "bg-[#f3f4f6] text-[#374151] rounded-bl-md"
                  } shadow-sm`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#f3f4f6] text-[#374151] rounded-2xl rounded-bl-md p-3 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <p className="text-sm">Débi está digitando...</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[#e5e7eb] flex-shrink-0">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && !isLoading && sendMessage()
                }
                placeholder="Digite sua mensagem..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-[#f9fafb] rounded-xl border-0 focus:ring-2 focus:ring-[#877fc0]/20 focus:bg-white transition-all duration-200 outline-none text-sm disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="w-12 h-12 bg-gradient-to-l from-[#877fc0] to-[#6ad3ab] text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}{" "}
      {/* Minimized State */}
      {!isOpen && !isAnimating && (
        <div
          onClick={toggleChatbot}
          className="bg-gradient-to-l from-[#877fc0] to-[#6ad3ab] rounded-2xl flex justify-between items-center py-3 px-5 w-48 max-md:w-40 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Débi</p>
            </div>
          </div>
          <ChevronUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
