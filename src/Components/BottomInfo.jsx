import {Link} from "react-router-dom"
import Copyright from "./Copyright"

function BottomInfo (){
    return(
        <>
            <footer className="border-solid border-gray-400 border-x-0 border-y-2">
                <div className="px-4 py-4 bg-gradient-to-br from-green-100 to-gray-200 "
                >
                    <div className="align-center justify-center text-center ">
                        <h2 className="text-blue-400 text-2xl" >Thunderstorm Concessionária</h2>
                    </div>                
                    <div className="px-8">
                        <Link to="/about">    
                            <p className="hover:text-red-600">Sobre Nós</p>
                        </Link>
                        <Link to="/local">
                            <p className="hover:text-red-600">Nossa Localização</p>
                        </Link>
                        <Link to="/trabalhe">
                            <p className="hover:text-red-600">Trabalhe Conosco</p>
                        </Link>
                        <Link to="/contato">
                            <p className="hover:text-red-600">Contato</p> 
                        </Link>                   
                    </div>                   
                </div>
            </footer>
            <Copyright />            
        </>
    )
}

export default BottomInfo