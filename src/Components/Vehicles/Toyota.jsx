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
            <div className="bg-gradient-to-tr from-slate-300 to-white px-4 grid grid-cols-1 
                            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                            xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24">
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
                        <p>Preço: R${toyotaCars[carId].preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
                        <Link to="/comprar" state={toyotaCars[carId]}>
                            <img src={toyotaCars[carId].photo_1}  alt="" className="w-64 h-40"/> 
                        </Link>                   
                    </div>
                ))}   
            </div>
                        
        </div>
    )    
}

export default Toyota