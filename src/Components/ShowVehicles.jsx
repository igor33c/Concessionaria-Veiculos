import carData from "./Vehicles/VehiclesList"
// importacao de dados de veiculos
import { Link } from "react-router-dom"

function ShowVehicles (){

    
    return(
        <div className="px-4">
            <div className="text-center mt-4 mb-4">
                <h1 className="text-blue-500 font-bold text-lg md:text-4xl">
                    Em destaque
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">               
                <div className="w-full md:w-auto">
                    <Link to="/comprar" state={carData.car1}>
                        {
                            //Linka para a proxima pagina de comprar e passa o dado do veiculo escolhido pelo usuario
                        }
                        <img
                        className="w-full md:w-56 h-36 object-cover"
                        src={carData.car1.photo_1}
                        alt="corolla2000"
                        />
                    </Link>
                        <div className="bg-gray-100 p-2 text-center">
                            <p className="font-bold text-lg">
                                {carData.car1.marca} {carData.car1.modelo} {carData.car1.ano}
                            </p>
                            <p className="font-bold text-lg text-blue-500">
                                R${carData.car1.preco}
                            </p>
                        </div>                    
                </div>                
                <div className="w-full md:w-auto">
                    <Link to="/comprar" state={carData.car2}>
                    <img
                    className="w-full md:w-56 h-36 object-cover"
                    src={carData.car2.photo_1}
                    alt="Civic 2020"
                    />
                    </Link>
                    <div className="bg-gray-100 p-2 text-center">
                        <p className="font-bold text-lg">
                            {carData.car2.marca} {carData.car2.modelo} {carData.car2.ano}
                        </p>
                        <p className="font-bold text-lg text-blue-500">
                            R${carData.car2.preco}
                        </p>
                    </div>
                
                </div>
                <div className="w-full md:w-auto">
                    <Link to="/comprar" state={carData.car3}>
                    <img
                    className="w-full md:w-56 h-36 object-cover"
                    src={carData.car3.photo_1}
                    alt="--"
                    />
                    </Link>
                    <div className="bg-gray-100 p-2 text-center">
                        <p className="font-bold text-lg">
                            {carData.car3.marca} {carData.car3.modelo} {carData.car3.ano}
                        </p>
                        <p className="font-bold text-lg text-blue-500">
                            R${carData.car3.preco}
                        </p>
                    </div>
                
                </div>
                <div className="w-full md:w-auto">
                    <Link to="/comprar" state={carData.car2}>
                    <img
                    className="w-full md:w-56 h-36 object-cover"
                    src={carData.car2.photo_1}
                    alt="Civic 2020"
                    />
                    </Link>
                    <div className="bg-gray-100 p-2 text-center">
                        <p className="font-bold text-lg">
                            {carData.car2.marca} {carData.car2.modelo} {carData.car2.ano}
                        </p>
                        <p className="font-bold text-lg text-blue-500">
                            R${carData.car2.preco}
                        </p>
                    </div>
                
                </div>
                <div className="w-full md:w-auto">
                    <Link to="/comprar" state={carData.car2}>
                    <img
                    className="w-full md:w-56 h-36 object-cover"
                    src={carData.car2.photo_1}
                    alt="Civic 2020"
                    />
                    </Link>
                    <div className="bg-gray-100 p-2 text-center">
                        <p className="font-bold text-lg">
                            {carData.car2.marca} {carData.car2.modelo} {carData.car2.ano}
                        </p>
                        <p className="font-bold text-lg text-blue-500">
                            R${carData.car2.preco}
                        </p>
                    </div>
                
                </div>
                
            </div>
  
        </div>
    )
}
///<div className="px-4">{'carData.car1.marca'}</div>
export default ShowVehicles