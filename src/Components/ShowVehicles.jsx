import carData from "./Vehicles/VehiclesList"
// importacao de dados de veiculos
import { Link } from "react-router-dom"

function ShowVehicles (){     
    
    return(
        <div className="px-4 py-8">
            <div className="text-center mt-4 mb-4">
                <h1 className="text-blue-500 font-bold text-lg md:text-4xl">
                    Em destaque
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-4 ">               
                <div className="w-full md:w-auto bg-gray-100 ">
                    <Link to="/comprar" state={carData.car1}>
                        {
                            //Linka para a proxima pagina de comprar e passa o dado do veiculo escolhido pelo usuario
                        }
                        <img
                        className="w-full md:w-64 h-48  object-cover"
                        src={carData.car1.photo_1}
                        alt="corolla2000"
                        />
                    </Link>
                    <div className=" p-2 text-center">
                        <p className="font-bold text-lg">
                            {carData.car1.marca} {carData.car1.modelo} 
                        </p>
                        <p>
                            {carData.car1.ano}
                        </p>
                        <p>
                            {carData.car1.km}km
                        </p>
                        <p className="font-bold text-lg text-blue-500">
                            R${carData.car1.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                        </p>
                    </div>                    
                </div> 

                <div className="w-full md:w-auto bg-gray-100">
                    <Link to="/comprar" state={carData.car2}>
                    <img
                    className="w-full md:w-64 h-48 object-cover"
                    src={carData.car2.photo_1}
                    alt="Civic 2020"
                    />
                    </Link>
                    <div className="p-2 text-center">
                        <p className="font-bold text-lg">
                            {carData.car2.marca} {carData.car2.modelo}
                        </p>
                        <p>
                            {carData.car2.ano}
                        </p>
                        <p>
                            {carData.car2.km}km
                        </p>
                        <p className="font-bold text-lg text-blue-500">
                            R${carData.car2.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                        </p>
                    </div>
                
                </div>

                <div className="w-full md:w-auto bg-gray-100">
                    <Link to="/comprar" state={carData.car3}>
                    <img
                    className="w-full md:w-64 h-48 object-cover"
                    src={carData.car3.photo_1}
                    alt="--"
                    />
                    </Link>
                    <div className="bg-gray-100 p-2 text-center">
                        <p className="font-bold text-lg">
                            {carData.car3.marca} {carData.car3.modelo} 
                        </p>
                        <p>
                            {carData.car3.ano}
                        </p>
                        <p>
                            {carData.car3.km}km
                        </p>
                        <p className="font-bold text-lg text-blue-500">
                            R${carData.car3.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                        </p>
                    </div>
                
                </div>
                <div className="w-full md:w-auto bg-gray-100">
                    <Link to="/comprar" state={carData.car4}>
                    <img
                    className="w-full md:w-64 h-48 object-cover"
                    src={carData.car4.photo_1}
                    alt="Civic 2020"
                    />
                    </Link>
                    <div className="p-2 text-center">
                        <p className="font-bold text-lg">
                            {carData.car4.marca} {carData.car4.modelo}
                        </p>
                        <p>
                            {carData.car4.ano}
                        </p>
                        <p>
                            {carData.car4.km}km
                        </p>
                        <p className="font-bold text-lg text-blue-500">
                            R${carData.car4.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                        </p>
                    </div>                
                </div>                              
            </div>
            <div>
                <Link to="/all">
                    <p className=" text-blue-600 hover:text-red-600 font-bold text-3xl px-2 inline-block">Todos veiculos</p>
                </Link>
            </div>  
        </div>
    )
}
///<div className="px-4">{'carData.car1.marca'}</div>
export default ShowVehicles