import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";
import { Link } from "react-router-dom";

function Volskwagen (){
    const volksCars = Object.values(carData).filter(car => car.marca === 'Volkswagen')
    console.log(volksCars)
    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4 flex">
                {Object.keys(volksCars).map((carId) => (/// mapeando o obj usando carId como Key
                    <div key={carId} className="car mr-4"> 
                    {
                    ///div para cada veiculo da marca toyota ser mostrado separadamente
                    }
                        <h2>
                            {volksCars[carId].marca} {volksCars[carId].modelo}
                        </h2> 
                        {
                            //mostrar dados
                        }
                        <p>
                            Ano: {volksCars[carId].ano}
                        </p>
                        <p>
                            Kilometragem: {volksCars[carId].km}
                        </p>
                        <p>
                            Preço: R${volksCars[carId].preco.toFixed(2)}
                        </p>
                        <Link to="/comprar" state={volksCars[carId]}>
                            <img src={volksCars[carId].photo_1}  alt={volksCars[carId.marca]} 
                                className="w-36 h-24"
                            />
                        </Link>                    
                    </div>
                 ))}
                
            </div>    
        </div>
    )    
}

export default Volskwagen