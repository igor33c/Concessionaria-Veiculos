import { useState} from "react"
import BottomInfo from "../BottomInfo"
import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"
import carData from "./VehiclesList"
import { Link } from "react-router-dom"

function AllVehicles (){       
    const [showOrdenar, setShowOrdenar] = useState(false)
    const [ordenar, setOrdenar] = useState("Padrão")
    const [allData, setAllData] = useState(Object.values(carData)) // recebendo obj de carData
    //necessario usar setState para poder alterar allData       
    const [search, setSearch] = useState('')   
    
    function handleSearch(e) {
        setSearch(e.target.value)        
    }    
    const handleClickButton = (newOrdenar) => {
        setOrdenar(newOrdenar)//monstrado botao com mostrar a opcao desejada            
        let sortedData = [...allData]//inicializacao       
        // escolhendo metodo de ordenacao
            switch (newOrdenar) {
                case ("Menor Preço"):
                    console.log('menor')
                    sortedData.sort((a, b) => a.preco - b.preco)//ordenando por menor
                    break                 
                case ("Maior Preço"):
                    sortedData.sort((a, b) => b.preco - a.preco)//ordenacao por maior 
                    break
                case ("Padrão"):
                    sortedData = Object.values(carData)//definicao padrao como veio do obj
                    break
                default:
                    break
            }  
        setAllData(sortedData)
    }          
    return(
        <>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
            <div className="bg-gradient-to-br from-blue-100 to-violet-200">
                <div className="flex py-2">                    
                    <span className="py-4 px-8">Ordenar por:</span>
                    <button className="bg-transparent hover:border-gray-600 hover:text-gray-500 mt-1" 
                        onClick={() => setShowOrdenar(!showOrdenar)}>                        
                        {ordenar}
                    </button>
                    {showOrdenar && 
                        (
                            <ul className="absolute left-20 bg-gray-500 rounded-lg py-1 px-3 
                                           flex flex-col items-center"
                            >
                                <button 
                                    className="text-white bg-transparent px-3 
                                               hover:text-gray-100 text-sm "
                                    onClick={() => handleClickButton('Menor Preço')}
                                    
                                >
                                    {/* muda ordem chamando handleclickbutton*/}                                     
                                    Menor Preço
                                </button>
                                <button 
                                    className="text-white bg-transparent px-3 
                                    hover:text-gray-200 text-sm "
                                    onClick={() => handleClickButton('Maior Preço')}
                                >
                                    {/* muda ordem chamando handleclickbutton*/} 
                                    Maior Preço
                                </button>
                                <button 
                                    className="text-white bg-transparent px-3 
                                    hover:text-gray-200 text-sm "
                                    onClick={() => handleClickButton('Padrão')}
                                >
                                    {/* muda ordem chamando handleclickbutton*/} 
                                    Padrão
                                </button>              
                            </ul>
                        )
                    }                                        
                </div>
                <div className="flex items-center">
                    <div className="ml-8 flex border border-blue-200 rounded py-1 px-1">
                        <input
                            type="text"
                            className="block w-400 px-4 py-2 text-violet-900 bg-white border rounded-md 
                                     focus:border-blue-300 focus:ring-blue-400 
                                       focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Filtrar marca ou modelo"
                            value={search}
                            onChange={handleSearch}
                        />

                        <Link                        
                            to ="/search"
                            state={search}                            
                        >                                
                            <button 
                                className="ml-4 text-slate-900 bg-blue-200 hover:bg-blue-300 focus:ring-4 
                                         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                                           py-2.5 w-full focus:outline-none" 
                            >
                                Buscar
                            </button>
                            
                        </Link>
                    </div>
                </div>
                <div 
                    className="px-8 car grid grid-cols-1 
                               sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                               xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24"
                >      
                    {
                        Object.keys(allData).map(
                            (carId) => 
                            (/// mapeando o obj usando carId como Key
                                <div 
                                    key={carId} 
                                    className="w-full md:w-auto px-2"
                                > 
                                {
                                ///div para cada veiculo ser mostrado separadamente
                                }
                                    <Link to="/comprar" state={allData[carId]}> 
                                        <img 
                                            src={allData[carId].photo.photo_1}  
                                            alt="not_found" 
                                            className="object-cover w-full h-44 mx-auto"
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
                                            Preço: R${allData[carId].preco.toLocaleString
                                                        ('pt-BR', {minimumFractionDigits: 2})}
                                        </p>
                                    </div>                                    
                                </div>                                    
                            )
                        )
                    }
                </div>
            </div>
            <BottomInfo />
        </>
    )
}
export default AllVehicles