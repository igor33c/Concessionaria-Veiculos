import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";
import {Link} from "react-router-dom";

function Fiat (){

    const fiatCars = Object.values(carData).filter(car => car.marca === 'Fiat')
    //aqui recemos somente veiculos da fiat usando.filter
    console.log(fiatCars)

    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-8 bg-gradient-to-r from-slate-100 to-slate-200 car grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                            xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24">
                {Object.keys(fiatCars).map((carId) => (/// mapeando o obj usando carId como Key
                    <div key={carId} className="car"> 
                    {
                    ///div para cada veiculo da marca fiat ser mostrado separadamente
                    }
                        <h2>{fiatCars[carId].marca} {fiatCars[carId].modelo}</h2> 
                        {
                            //mostrar dados
                        }
                        <p>Ano: {fiatCars[carId].ano}</p>
                        <p>Kilometragem: {fiatCars[carId].km}</p>
                        <p>Preço: R${fiatCars[carId].preco.toFixed(2)}</p>
                        <Link to="/comprar" state={fiatCars[carId]}>
                        <img src={fiatCars[carId].photo_1}  alt="" className="w-36 h-24"/>
                        </Link>                    
                    </div>
                ))}
            </div>

        </div>
    )    
}

export default Fiat