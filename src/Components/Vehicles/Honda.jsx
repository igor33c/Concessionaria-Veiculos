import MenuModelos from "../../Components/MenuModelos";
import TopInfo from "../../Components/TopInfo";
import TopMenu from "../../Components/TopMenu";
import carData from "./VehiclesList";

function Honda(){
    const hondaCars = Object.values(carData).filter(car => car.marca === 'Honda')    

    console.log(hondaCars)

    return(
        <div>
            <TopMenu />
            <TopInfo />
            <MenuModelos />            
            <div className="px-4">Honda Civic 2022</div>    
        </div>
    )    
}

export default Honda