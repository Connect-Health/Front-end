import BGHome from "./Componentes/BGHome"
import Header from "./Componentes/Header"
import Blocos from "./Componentes/Blocos"
import Psico from "./Componentes/Psico"
import Nutrim from './Componentes/Nutrim'
import Feed from "./Componentes/Feed"


function Home() {
    return(
        <>
            <Header />
            <BGHome/>
            <Blocos />
            <Psico />
            <Nutrim/>       
            <Feed/>
            
            
                
        </>
        
    )
}
export default Home


