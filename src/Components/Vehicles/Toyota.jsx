import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";

function Toyota (){  

    const toyotaCars = Object.values(carData).filter(car => car.marca === 'Toyota')    

    console.log(toyotaCars)

    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">Toyota Corolla 2023</div>
                        
        </div>
    )    
}

export default Toyota