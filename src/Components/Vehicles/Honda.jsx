import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";
import {Link} from "react-router-dom";
import BottomInfo from "../BottomInfo";

function Honda(){
    const hondaCars = Object.values(carData).filter(car => car.marca === 'Honda')    

    console.log(hondaCars)

    return(
        <>
            <TopMenu />
            <TopInfo />
            <MenuModelos />
            <div className="bg-gradient-to-r from-slate-100 to-slate-200">
                <div className="w-full py-4">
                        <h1 className="text-center justify-center">Modelos Honda</h1>
                </div>          
                <div className="px-8  car grid grid-cols-1 
                                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                                xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 py-24"
                >
                    
                    {Object.keys(hondaCars).map((carId) => (/// mapeando o obj usando carId como Key
                        <div key={carId} className="flex flex-col justify-center text-center"> 
                            {
                            ///div para cada veiculo da marca fiat ser mostrado separadamente
                            }
                            <h2 className="">{hondaCars[carId].marca} {hondaCars[carId].modelo}</h2> 
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
                                <img src={hondaCars[carId].photo_1}  alt="" className="w-full h-auto mx-auto"/> 
                                {/*w-full h-auto mx-auto*/}  
                            </Link>                    
                        </div>
                    ))}
                </div>
            </div>
            <BottomInfo />

        </>
    )    
}

export default Honda