import MenuModelos from "./MenuModelos";
import TopInfo from "./TopInfo";
import TopMenu from "./TopMenu";

function Home(){
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
        </div>
    )

}

export default Home