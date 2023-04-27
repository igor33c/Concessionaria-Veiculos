import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";
import {Link} from "react-router-dom";

function Ford (){

    const fordCars = Object.values(carData).filter(car => car.marca === 'Ford')    

        console.log(fordCars)
    return(    
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">
            {Object.keys(fordCars).map((carId) => (/// mapeando o obj usando carId como Key
                        <div key={carId} className="car mr-4"> 
                        {
                        ///div para cada veiculo da marca toyota ser mostrado separadamente
                        }
                            <h2>{fordCars[carId].marca} {fordCars[carId].modelo}</h2> 
                            {
                                //mostrar dados
                            }
                            <p>Ano: {fordCars[carId].ano}</p>
                            <p>Kilometragem: {fordCars[carId].km}</p>
                            <p>Preço: R${fordCars[carId].preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
                            <Link to="/comprar" state={fordCars[carId]}>
                                <img src={fordCars[carId].photo_1}  alt="" className="w-36 h-24"/>
                            </Link>                    
                        </div>
            ))}
            </div>
        </div>
    )
}

export default Ford