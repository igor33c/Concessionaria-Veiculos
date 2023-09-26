import { useLocation } from "react-router-dom"
import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import carData from "./VehiclesList"
import {Link} from "react-router-dom"
import BottomInfo from "../BottomInfo"
import TopMenu from "../TopMenu"
import SearchButton from "../SearchButton"
import Ordenar from "../Ordenar"
import { useState } from "react"

const Searching = props =>
{
    const location = useLocation()
    const filterSearch = location.state //receiving search value
    //console.log(filterSearch)    
    const [allData, setAllData] = useState(Object.values(carData))
    const [showOrdenar, setShowOrdenar] = useState(false)
    const [ordenar, setOrdenar] = useState("Padrão")
    
    const filteredData = Object.keys(allData)
        .filter((carId) =>
            allData[carId].marca.toLowerCase() === filterSearch.toLowerCase() ||
            allData[carId].modelo.toLowerCase().includes(filterSearch.toLowerCase())
        )
        .map((carId) => allData[carId])
        
    console.log("filteredData:", filteredData)
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
            <div 
                className="bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% 
                         to-emerald-100 to-90%"
            >   
                <div className="py-4 px-8 flex items-center">
                    <span className="pr-8">Ordenar por:</span>
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
                <div className="px-8 car grid grid-cols-1 
                               sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                               xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-20">
                    {                           
                        Object.keys(filteredData).map(
                            (carId) => 
                                (/// mapeando o obj usando carId como Key
                                    <div key={carId} className="w-full md:w-auto px-2"
                                    > 
                                    {
                                    ///div para cada veiculo ser mostrado separadamente
                                    }
                                        <Link to="/comprar" state={filteredData[carId]}> 
                                            <img 
                                                src={filteredData[carId].photo.photo_1}  
                                                alt="not available" 
                                                className="object-cover w-full h-44 mx-auto"
                                            />
                                        </Link> 
                                        <div className=" p-2 text-center">
                                            <p 
                                                className="font-bold text-lg"
                                            >
                                                {filteredData[carId].marca} {filteredData[carId].modelo} 
                                            </p>
                                            <p>
                                            Ano: {filteredData[carId].ano}
                                            </p>
                                            <p>
                                                Kilometragem: {filteredData[carId].km}
                                            </p>
                                            <p 
                                                className="font-bold text-lg text-blue-500"
                                            >
                                                Preço: R${filteredData[carId].preco.toLocaleString
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
export default Searching