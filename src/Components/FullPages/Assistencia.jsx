import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";

function Assistencia (){
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">
                <h1>Assistencia Técnica</h1>    
            </div>    
        </div>
    )    
}

export default Assistencia