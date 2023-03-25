import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";
import {Link} from "react-router-dom";

function Toyota (){  

    const toyotaCars = Object.values(carData).filter(car => car.marca === 'Toyota')    

    console.log(toyotaCars)

    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4 flex">
            {Object.keys(toyotaCars).map((carId) => (/// mapeando o obj usando carId como Key
                    <div key={carId} className="car"> 
                    {
                    ///div para cada veiculo da marca toyota ser mostrado separadamente
                    }
                        <h2>{toyotaCars[carId].marca} {toyotaCars[carId].modelo}</h2> 
                        {
                            //mostrar dados
                        }
                        <p>Ano: {toyotaCars[carId].ano}</p>
                        <p>Kilometragem: {toyotaCars[carId].km}</p>
                        <p>Preço: R${toyotaCars[carId].preco.toFixed(2)}</p>
                        <Link to="/comprar" state={toyotaCars[carId]}>
                            <img src={toyotaCars[carId].photo_1}  alt="" className="w-36 h-24"/> 
                        </Link>                   
                    </div>
                ))}   
            </div>
                        
        </div>
    )    
}

export default Toyota