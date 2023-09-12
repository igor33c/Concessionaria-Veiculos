import MenuModelos from "../MenuModelos"
import TopInfo from "../TopInfo"
import TopMenu from "../TopMenu"
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import BottomInfo from "../BottomInfo";
import CarCarousel from "../CarCarousel"

function Buying() {
    const location = useLocation()// usa o UseLocation para receber dados enviados
    console.log(location) //testando
    
    const carInfo = location.state // setta carInfo com os dados do veiculo escolhido usando o location.state
    console.log(carInfo) 
    return (
      <>
          <TopMenu />
          <TopInfo />
          <MenuModelos />
          <div className="bg-gradient-to-br from-slate-50 to-green-50 px-4 py-4">
                <div className="text-center py-4">
                    <p className="text-4xl text-slate-800">{carInfo.marca} {carInfo.modelo} {carInfo.ano}</p>
                </div>
                <div className="px-8 grid grid-cols-1 
                                sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 
                                lg:gap-10 xl:gap-12 py-24"
                >   
                    <CarCarousel
                        carInfo={carInfo}
                    />                                     
                    <div className="text-center border-solid border-2 border-sky-200 rounded-3xl">
                        <div className="py-4">
                            <span className="font-bold  text-blue-500 text-4xl">
                                Preço: R${carInfo.preco.toLocaleString
                                ('pt-BR', {minimumFractionDigits: 2})}
                            </span>
                        </div>
                        <div className=" py-4 ">
                            <span className="text-3 xl font-bold">
                                Deixe seu contato conosco que retornameremos para você!!!
                            </span>
                        </div>
                        <form className="py-8">                    
                            <div className="py-1">
                                <label htmlFor="Nome">
                                    Seu Nome:
                                    <div>
                                        <input                                      
                                            type="text"
                                            className="pl-1"                                      
                                        />
                                    </div>
                                </label>
                            </div>
                            <div className="py-1">   
                                <label htmlFor="email">
                                    Seu e-mail:
                                    <div className="">
                                        <input                                    
                                            type="email"
                                            id="email"
                                            className="pl-1" 
                                        />
                                    </div> 
                                </label>
                            </div> 
                            <div className="py-1">
                                <label htmlFor="tel">
                                    Seu Celular:
                                    <div>
                                        <input
                                            className="pl-1"  
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
                                    type="button"                              
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




