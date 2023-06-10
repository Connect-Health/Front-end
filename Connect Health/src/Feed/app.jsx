import Header from "./Components/header"
import Centro from "./Components/centro"
import Menu from "./Components/Menu"
import Recomendacoes from "./Components/Recomendacoes"
import MenuMobile from "./Components/MenuMobile"



function Feed() {
    return(
        <div className="overflow-x-hidden">
        <Header />  
        <div className="flex  bg-[#f5f5f5]">
            <Menu />
            <Centro />
            <Recomendacoes />
        </div>
        <MenuMobile />
      
        

        </div>
        
    )
}
export default Feed