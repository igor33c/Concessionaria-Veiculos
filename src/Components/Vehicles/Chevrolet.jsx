import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";
import {Link} from "react-router-dom";

function Chevrolet (){

    const chevroletCars = Object.values(carData).filter(car => car.marca === 'Chevrolet')    
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">
                {Object.keys(chevroletCars).map((carId) => (/// mapeando o obj usando carId como Key
                        <div key={carId} className="car mr-4"> 
                        {
                        ///div para cada veiculo da marca toyota ser mostrado separadamente
                        }
                            <h2>
                                {chevroletCars[carId].marca} {chevroletCars[carId].modelo}
                            </h2> 
                            {
                                //mostrar dados
                            }
                            <p>
                                Ano: {chevroletCars[carId].ano}
                            </p>
                            <p>
                                    Kilometragem: {chevroletCars[carId].km}
                            </p>
                            <p>
                                    Preço: R${chevroletCars[carId].preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                            </p>
                            <Link to="/comprar" state={chevroletCars[carId]}>
                                <img src={chevroletCars[carId].photo_1}  alt={chevroletCars[carId.marca]} 
                                        className="w-36 h-24"
                                />
                            </Link>                    
                        </div>
                ))}                
            </div>    
        </div>
    )    
}

export default Chevrolet