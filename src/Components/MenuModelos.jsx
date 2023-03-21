import { Link } from "react-router-dom"

function MenuModelos (){
    return(
        <div className="flex bg-gra px-4 mt-2 py-2 bg-gradient-to-r from-cyan-200 to-blue-300">
            <ul className="flex flex-wrap text-gray-700">
                <li className="mx-1 my-1">
                    <Link to ="/toyota">
                        <button className="">
                            Toyota
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/ford">
                        <button className="">
                            Ford
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/fiat">
                        <button className="">
                            Fiat
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/honda">
                        <button className="">
                            Honda
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/chevrolet">
                        <button className="">
                            Chevrolet
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/volkswagen">
                        <button className="">
                            Volkswagen
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/assistencia">
                        <button className="">
                            Assistencia Técnica
                        </button>
                    </Link>
                </li>                
            </ul>
        </div>
    )
}
export default MenuModelos