import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";
import {Link} from "react-router-dom";

function Honda(){
    const hondaCars = Object.values(carData).filter(car => car.marca === 'Honda')    

    console.log(hondaCars)

    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4 flex">
                {Object.keys(hondaCars).map((carId) => (/// mapeando o obj usando carId como Key
                    <div key={carId} className="car mr-4"> 
                    {
                    ///div para cada veiculo da marca toyota ser mostrado separadamente
                    }
                        <h2>
                            {hondaCars[carId].marca} {hondaCars[carId].modelo}
                        </h2> 
                        {
                            //mostrar dados
                        }
                        <p>
                            Ano: {hondaCars[carId].ano}
                        </p>
                        <p>
                                Kilometragem: {hondaCars[carId].km}
                        </p>
                        <p>
                                Preço: R${hondaCars[carId].preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                        </p>
                        <Link to="/comprar" state={hondaCars[carId]}>
                            <img src={hondaCars[carId].photo_1}  alt={hondaCars[carId.marca]} 
                                    className="w-36 h-24"
                            />
                        </Link>                    
                    </div>
                ))}
            </div>    
        </div>
    )    
}

export default Honda