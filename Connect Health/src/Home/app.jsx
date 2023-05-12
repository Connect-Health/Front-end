import BGHome from "./Componentes/BGHome"
import Header from "./Componentes/Header"
import Blocos from "./Componentes/Blocos"
import Psico from "./Componentes/Psico"
import Nutrim from './Componentes/Nutrim'
import Feed from "./Componentes/Feed"
import Sobre from "./Componentes/Sobre"
import Contato from "./Componentes/Contato"


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
        </div>
        
    )
}
export default Home


