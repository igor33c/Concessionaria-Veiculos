import { Link } from "react-router-dom";

const Menu = props => (
    <div>        
        <ul>
            <li>
                <Link to ="/">Inicio</Link>
            </li>
            <li>
                <Link to ="/all">Veiculos</Link>
            </li>
            
        </ul>
    </div>

)

export default Menu