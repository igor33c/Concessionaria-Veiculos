import { Link } from "react-router-dom"

function MenuModelos (){
    return(
        <div className="flex bg-gra px-4 mt-0.5 py-2 bg-gradient-to-r from-cyan-200 to-blue-300">
            <ul className="flex flex-wrap text-gray-700">
                <li className="mx-1 my-1">
                    <Link to ="/toyota">
                        <button className="hover:text-gray-500">
                            Toyota
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/ford">
                        <button className="hover:text-gray-500">
                            Ford
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/fiat">
                        <button className="hover:text-gray-500">
                            Fiat
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/honda">
                        <button className="hover:text-gray-500">
                            Honda
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/chevrolet">
                        <button className="hover:text-gray-500">
                            Chevrolet
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/volkswagen">
                        <button className="hover:text-gray-500">
                            Volkswagen
                        </button>
                    </Link>
                </li>
                <li className="mx-1 my-1">
                    <Link to ="/assistencia">
                        <button className="hover:text-gray-500">
                            Assistencia Técnica
                        </button>
                    </Link>
                </li>                
            </ul>
        </div>
    )
}
export default MenuModelos