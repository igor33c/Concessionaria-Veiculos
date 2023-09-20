import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import AllVehicles from "../Vehicles/AllVehicles";
import About from "../FullPages/AboutUs";
import Toyota from "../Vehicles/Toyota";
import Ford from "../Vehicles/Ford";
import Fiat from "../Vehicles/Fiat";
import Honda from "../Vehicles/Honda";
import Assistencia from "../FullPages/Assistencia";
import Volskwagen from "../Vehicles/Volkswagen";
import Chevrolet from "../Vehicles/Chevrolet";
import Buying from "../FullPages/Buying";
import Searching from "../Vehicles/Searching"

const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path="/comprar" element={<Buying />}/>
            <Route path="/assistencia" element={<Assistencia />}/>
            <Route path="/volkswagen" element={<Volskwagen />}/>
            <Route path="/chevrolet" element={<Chevrolet />} /> 
            <Route path="/fiat" element={<Fiat />} /> 
            <Route path="/honda" element={<Honda />} /> 
            <Route path="/ford" element={<Ford />} /> 
            <Route path="/toyota" element={<Toyota />} /> 
            <Route path="/about" element={<About />} />          
            <Route path="/all" element={<AllVehicles />} />
            <Route path="/search" element={<Searching />} />   
            <Route path="/" exact element={<Home />} />            
        </Routes>
    </main>
)

export default Content