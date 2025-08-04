import Chatbot from "../Components/ChatBot/Chatbot";
import Footer from "../Components/Footer";
import BGHome from "./Componentes/BGHome";
import Contato from "./Componentes/Contato";
import Feed from "./Componentes/Feed";
import Nutrim from "./Componentes/Nutrim";
import Psico from "./Componentes/Psico";
import Sobre from "./Componentes/Sobre";

function Home() {
  return (
    <div className="dark:bg-black dark:bg-opacity-90 dark:text-white max-md:overflow-x-hidden">
      <BGHome />
      <Psico />
      <Nutrim />
      <Feed />
      <Sobre />
      <Contato />
      <Footer
        className="max-md:mt-20"
        bg="[#8c8ae5]"
        bgSec="[#457ff4]"
        invert="invert"
        invertHome="invert-0"
      />
      <Chatbot />
    </div>
  );
}
export default Home;
