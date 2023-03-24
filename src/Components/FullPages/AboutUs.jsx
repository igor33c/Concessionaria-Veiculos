import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"

function About (){
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
            <div className="px-4 justify-center">
                <h1>
                    Sobre Nós
                </h1>
            </div>
        </div>
    )

}

export default About