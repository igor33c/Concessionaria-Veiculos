import { useState} from "react"
import BottomInfo from "../BottomInfo"
import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"
import carData from "./VehiclesList"
import { Link } from "react-router-dom"
import SearchButton from "../SearchButton"
import Ordenar from "../Ordenar"

function AllVehicles (){       
    const [showOrdenar, setShowOrdenar] = useState(false)
    const [ordenar, setOrdenar] = useState("Padrão")
    const [allData, setAllData] = useState(Object.values(carData)) // recebendo obj de carData
    //necessario usar setState para poder alterar allData     
       
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
                    <Ordenar
                        setShowOrdenar={setShowOrdenar} 
                        handleClickButton={handleClickButton}
                        showOrdenar={showOrdenar}
                        ordenar={ordenar}
                    />                                        
                </div>
                <div className="flex items-center">                    
                        <SearchButton />     
                    
                </div>
                <div 
                    className="px-8 grid grid-cols-1 
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

