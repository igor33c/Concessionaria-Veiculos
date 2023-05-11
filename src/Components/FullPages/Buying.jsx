import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import BottomInfo from "../BottomInfo";

function Buying() {
    const location = useLocation()// usa o UseLocation para receber dados enviados
    console.log(location) //testando
    
    const carInfo = location.state // setta carInfo com os dados do veiculo escolhido usando o location.state
    console.log(carInfo.modelo) 
    return (
      <>
          <TopMenu />
          <TopInfo />
          <MenuModelos />
          <div className="px-4">
                <p>{carInfo.marca} {carInfo.modelo} {carInfo.ano}</p>
                <div className="flex"> 
                </div>  
          </div>
          <BottomInfo />
      </>
    );
  
}

export default Buying




