import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";

function Chevrolet (){
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">Chevrolet Onix 2021</div>    
        </div>
    )    
}

export default Chevrolet