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
                <div>
                  <img src={carInfo.photo_1} alt="" />
                  <img src={carInfo.photo_2} alt="" /> 
                  <img src={carInfo.photo_3} alt="" />  
                </div>
                <div>
                  <div>
                    <form>                    
                      <div className="py-1">
                          <label htmlFor="Nome">
                              Seu Nome:
                              <div>
                                  <input                                      
                                      type="text"                                      
                                  />
                              </div>
                          </label>
                      </div>
                      <div className="py-1 flex">   
                          <label htmlFor="email">
                              Seu e-mail:
                              <div className="">
                                  <input                                    
                                      type="email"
                                      id="email" 
                                  />
                              </div> 
                          </label>
                      </div> 
                      <div className="py-1">
                          <label htmlFor="tel">
                              Seu Celular:
                              <div>
                                  <input
                                      className="px-1" 
                                      type="tel" 
                                      id="phone"  
                                      pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
                                  />
                              </div>
                          </label>
                      </div>                            
                      <div className="py-2">
                          <button 
                              className="text-slate-900 bg-blue-200 hover:bg-blue-300 focus:ring-4 
                                          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                                            focus:outline-none"                                                
                              type="submit"                              
                          >
                            Enviar
                          </button>
                      </div>
                        
                    </form>
                  </div>  
                </div>  
          </div>
          <BottomInfo />
      </>
    );
  
}

export default Buying




