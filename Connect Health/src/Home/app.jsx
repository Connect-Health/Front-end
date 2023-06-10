import BGHome from "./Componentes/BGHome"
import Header from "./Componentes/Header"
import Blocos from "./Componentes/Blocos"
import Psico from "./Componentes/Psico"
import Nutrim from './Componentes/Nutrim'
import Feed from "./Componentes/Feed"
import Sobre from "./Componentes/Sobre"
import Contato from "./Componentes/Contato"
import Footer from "../Components/Footer"


function Home() {
    return(
        <div className="dark:bg-black dark:bg-opacity-90 dark:text-white max-md:overflow-x-hidden">
            <BGHome/>
            {/* <Blocos /> */}
            <Psico />
            <Nutrim/>       
            <Feed/>
            <Sobre/>
            <Contato/>
            <Footer className='max-md:mt-20'
                bg="[#5D59FF]"
                bgSec="[#457ff4]"
                invert="invert"
            />
        </div>
        
    )
}
export default Home


