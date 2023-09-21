import { useLocation } from "react-router-dom"
import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import carData from "./VehiclesList"
import {Link} from "react-router-dom"
import BottomInfo from "../BottomInfo"
import TopMenu from "../TopMenu"

const Searching = props =>
{
    const location = useLocation()
    const filterSearch = location.state //receiving search value
    //console.log(filterSearch)    
    const allData = Object.values(carData)
    
    const filteredData = Object.keys(allData)
        .filter
        (   
            (carId) =>
                allData[carId].marca === filterSearch || allData[carId].modelo.includes(filterSearch)
        )
        .map((carId) => allData[carId])
        
    //console.log(filteredData)
    return(
        <>
            <TopMenu />
            <TopInfo />            
            <MenuModelos />
            <div className="px-8 car grid grid-cols-1 
                            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                            xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24"
            >
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
                                            <img src={filteredData[carId].photo.photo_1}  alt="" className="object-cover w-full h-44 mx-auto"
                                            />
                                        </Link> 
                                        <div className=" p-2 text-center">
                                            <p className="font-bold text-lg">
                                                {filteredData[carId].marca} {filteredData[carId].modelo} 
                                            </p>
                                            <p>
                                            Ano: {filteredData[carId].ano}
                                            </p>
                                            <p>
                                                Kilometragem: {filteredData[carId].km}
                                            </p>
                                            <p className="font-bold text-lg text-blue-500">
                                                Preço: R${filteredData[carId].preco.toLocaleString
                                                        ('pt-BR', {minimumFractionDigits: 2})}
                                            </p>
                                        </div>                                    
                                    </div>                                    
                            )
                        )
                }
            </div>
            <BottomInfo />
        </>
    )
}
export default Searching