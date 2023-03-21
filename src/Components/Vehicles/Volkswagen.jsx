import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";

function Volskwagen (){
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">Volkswagen Gol 2019</div>    
        </div>
    )    
}

export default Volskwagen