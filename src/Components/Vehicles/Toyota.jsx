import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";

function Toyota (){
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">Toyota Corolla 2023</div>    
        </div>
    )    
}

export default Toyota