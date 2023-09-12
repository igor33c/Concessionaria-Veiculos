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
            <div className="bg-gradient-to-tr from-slate-300 to-white px-16">  
                <div className="pt-4">
                    <h1 className="text-blue-500 font-bold text-lg md:text-4xl text-center justify-center">
                        Modelos Ford
                    </h1>
                </div>          
                <div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                            lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 
                            lg:gap-10 xl:gap-12 py-24"
                >                    
                    {Object.keys(fordCars).map((carId) => (
                        <div key={carId} className="flex flex-col items-center text-center"> 
                            <h2 className="font-bold text-lg">
                                {fordCars[carId].marca} {fordCars[carId].modelo}
                            </h2> 
                            <p>
                                Ano: {fordCars[carId].ano}
                            </p>
                            <p>
                                Kilometragem: {fordCars[carId].km}
                            </p>
                            <p className="font-bold text-lg text-blue-500">
                                Preço: R${fordCars[carId].preco.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                            </p>
                            <Link to="/comprar" state={fordCars[carId]}>
                                <img src={fordCars[carId].photo.photo_1} alt="" className="w-full md:w-64 h-48 object-cover"/> 
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