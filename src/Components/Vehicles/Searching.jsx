import { useLocation } from "react-router-dom"
import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import carData from "./VehiclesList"

const Searching = props =>{
    const location = useLocation()
    const filtered = location.state
    console.log(filtered)
    console.log(carData)
    return(
        <>
            <TopInfo />            
            <MenuModelos />

        </>
    )
}
export default Searching