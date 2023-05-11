import MenuModelos from "../MenuModelos";
import TopInfo from "../TopInfo";
import TopMenu from "../TopMenu";
import carData from "./VehiclesList";
import { Link } from "react-router-dom";
import BottomInfo from "../BottomInfo";

function Volskwagen (){
    const volksCars = Object.values(carData).filter(car => car.marca === 'Volkswagen')
    console.log(volksCars)
    return(
        <>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
            <div className="bg-gradient-to-r from-slate-100 to-slate-200">
                <div className="w-full py-4">
                        <h1 className="text-center justify-center">Modelos Volkswagen</h1>
                </div>          
                <div className="px-8  car grid grid-cols-1 
                                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                                xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24"
                >
                    
                    {Object.keys(volksCars).map((carId) => (/// mapeando o obj usando carId como Key
                        <div key={carId} className="flex flex-col justify-center text-center"> 
                            {
                            ///div para cada veiculo da marca fiat ser mostrado separadamente
                            }
                            <h2 className="">{volksCars[carId].marca} {volksCars[carId].modelo}</h2> 
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
                                Preço: R${volksCars[carId].preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                            </p>
                            <Link to="/comprar" state={volksCars[carId]}>
                                <img src={volksCars[carId].photo_1}  alt="" className="w-36 h-24 mx-auto"/>  
                            </Link>                    
                        </div>
                    ))}
                </div>
            </div>
            <BottomInfo />
        </>
    )    
}

export default Volskwagen