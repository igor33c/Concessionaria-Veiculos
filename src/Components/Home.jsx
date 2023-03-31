import BottomInfo from "./BottomInfo";
import MenuModelos from "./MenuModelos";
import ShowVehicles from "./ShowVehicles";
import TopInfo from "./TopInfo";
import TopMenu from "./TopMenu";

function Home(){
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
            <ShowVehicles />
            <BottomInfo/>            
        </div>
    )

}

export default Home