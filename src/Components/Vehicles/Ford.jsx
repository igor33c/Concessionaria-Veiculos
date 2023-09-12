import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import BottomInfo from "../BottomInfo";
import carData from "./VehiclesList";
import {Link} from "react-router-dom";

function Ford (){

    const fordCars = Object.values(carData).filter(car => car.marca === 'Ford')    

        console.log(fordCars)
    return(    
        <>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
            <div className="bg-gradient-to-r from-slate-100 to-slate-200">
                <div className="w-full py-4">
                    <h1 className="text-blue-500 font-bold text-lg md:text-4xl text-center justify-center">
                        Modelos Ford
                    </h1>
                </div>          
                <div className="px-8  car grid grid-cols-1 
                                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                                xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24"
                >
                    
                    {Object.keys(fordCars).map((carId) => (/// mapeando o obj usando carId como Key
                        <div key={carId} className="flex flex-col justify-center text-center"> 
                            {
                            ///div para cada veiculo da marca fiat ser mostrado separadamente
                            }
                            <h2 className="">{fordCars[carId].marca} {fordCars[carId].modelo}</h2> 
                            {
                                //mostrar dados
                            }
                            <p>
                                Ano: {fordCars[carId].ano}
                            </p>
                            <p>
                                Kilometragem: {fordCars[carId].km}
                            </p>
                            <p>
                                Preço: R${fordCars[carId].preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                            </p>
                            <Link to="/comprar" state={fordCars[carId]}>
                                <img src={fordCars[carId].photo_1}  alt="" className="w-36 h-24 mx-auto"/>  
                            </Link>                    
                        </div>
                    ))}
                </div>
            </div>
            <BottomInfo />

        </>
    )
}

export default Ford