import Header from "./Components/header"
import Centro from "./Components/centro"
import Menu from "./Components/Menu"
import Recomendacoes from "./Components/Recomendacoes"



function Feed() {
    return(
        <>
        <Header />  
        <div className="flex px-[2.5%] gap-[2.5%] bg-[#f5f5f5]">
            <Menu />
            <Centro />
            <Recomendacoes />
        </div>
      
        

        </>
        
    )
}
export default Feed