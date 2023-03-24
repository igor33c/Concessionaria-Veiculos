import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"
import * as React from 'react';

import { useLocation } from 'react-router-dom';

function Buying() {
   const location = useLocation()// usa o UseLocation para receber dados enviados
   console.log(location) //testando

   const carInfo = location.state // setta carInfo com os dados do veiculo escolhido usando o location.state
   console.log(carInfo.modelo)

  return (
    <div>
        <TopMenu />
        <TopInfo />
        <MenuModelos />
        <div className="px-4">
            <p>{carInfo.marca} {carInfo.modelo} {carInfo.ano}</p>            
            <img src={carInfo.photo_1} alt="not Found" />
            
        </div>
    </div>
  );
}

export default Buying




