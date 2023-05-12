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
        <div className="">
            <Header />
            <BGHome/>
            <Blocos />
            <Psico />
            <Nutrim/>       
            <Feed/>
            <Sobre/>
            <Contato/>
            <Footer
                bg="[#1E5BD1]"
                bgSec="[#457ff4]"
                invert="invert"
            />
        </div>
        
    )
}
export default Home


