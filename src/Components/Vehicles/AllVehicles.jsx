import { useState } from "react"
import BottomInfo from "../BottomInfo"
import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"
import carData from "./VehiclesList"
import { Link } from "react-router-dom"

function AllVehicles (){

    const [showOrdenar, setShowOrdenar] = useState()
    const allData = carData
    // atribuindo allData para mostrar dados de carData    
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
            <div className="bg-gradient-to-br from-blue-200 to-violet-300">
                <div>
                    <span className="py-4 px-8">Ordenar por:</span>
                    <button className="bg-transparent hover:border-gray-600 hover:text-gray-500 mt-1" 
                        onClick={() => setShowOrdenar(!showOrdenar)}>                        
                        Menu
                    </button>
                    {showOrdenar && 
                            (
                                <ul className="absolute top-10 left-0 bg-gray-500 rounded-lg py-1 px-3 
                                               flex flex-col items-center"
                                >
                                    <li className="mb-2">
                                        <Link to ="/about">
                                        <button className="text-white bg-transparent px-3 
                                        hover:text-gray-300 text-sm "
                                        >
                                            Menor Preçi
                                        </button>
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <button className="text-white bg-transparent px-3 
                                        hover:text-gray-200 text-sm "
                                        >
                                            Maior Preço
                                        </button>
                                    </li>     
                                </ul>
                            )
                        }
                </div> 

                <div className=" px-8 car grid grid-cols-1 
                                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                                xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24"
                >   
                    
                             
                    
                    {
                        Object.keys(allData).map(
                            (carId) => 
                                (/// mapeando o obj usando carId como Key
                                    <div key={carId} className="w-full md:w-auto px-2"
                                    > 
                                    {
                                    ///div para cada veiculo ser mostrado separadamente
                                    }
                                        <Link to="/comprar" state={allData[carId]}> 
                                            <img src={allData[carId].photo_1}  alt="" className="w-full md:w-64 h-48  
                                                                                                object-cover"
                                            />
                                        </Link> 
                                        <div className=" p-2 text-center">
                                            <p className="font-bold text-lg">
                                                {allData[carId].marca} {allData[carId].modelo} 
                                            </p>
                                            <p>
                                            Ano: {allData[carId].ano}
                                            </p>
                                            <p>
                                                Kilometragem: {allData[carId].km}
                                            </p>
                                            <p className="font-bold text-lg text-blue-500">
                                                Preço: R${allData[carId].preco.toFixed(2)}
                                            </p>
                                        </div>                                    
                                    </div>                                    
                            )
                        )
                    }
                </div>
            </div>
            <BottomInfo />
        </div>
    )
}

export default AllVehicles
