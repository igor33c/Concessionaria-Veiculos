import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";

function Fiat (){
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">Fiat Argo Drive 2021</div>    
        </div>
    )    
}

export default Fiat