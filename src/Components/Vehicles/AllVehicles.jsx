import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"
import carData from "./VehiclesList"
import { Link } from "react-router-dom"

function AllVehicles (){
    const allData = carData
    // atribuindo allData para mostrar dados de carData    
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
            <div className="bg-gradient-to-br from-blue-200 to-violet-300 px-4 car grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                            xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24"
            >
                {Object.keys(allData).map((carId) => (/// mapeando o obj usando carId como Key
                    <div key={carId} className="car mr-4 ml-4 justify-center text-center"> 
                    {
                    ///div para cada veiculo ser mostrado separadamente
                    }
                        <h2>{allData[carId].marca} {allData[carId].modelo}</h2> 
                        {
                            //mostrar dados
                        }
                        <p>Ano: {allData[carId].ano}</p>
                        <p>Kilometragem: {allData[carId].km}</p>
                        <p>Preço: R${allData[carId].preco.toFixed(2)}</p>
                        <Link to="/comprar" state={allData[carId]}> 
                        <img src={allData[carId].photo_1}  alt="" className="w-48 h-32"/>
                        </Link>                                            
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default AllVehicles
