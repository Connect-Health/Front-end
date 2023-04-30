import BGHome from "./Componentes/BGHome"
import Header from "./Componentes/Header"
import Blocos from "./Componentes/Blocos"
import Psico from "./Componentes/Psico"
import Nutrim from './Componentes/Nutrim'


function Home() {
    return(
        <>
            <Header />
            <BGHome/>
            <Blocos/>
            <Psico/>
        </>
        
    )
}
export default Home


