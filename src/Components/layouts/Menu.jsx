import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import AllVehicles from "../AllVehicles/AllVehicles";

const Content = props => (
    <main className='Content'>
        <Routes>            
            <Route path="/all" element={<AllVehicles />} />   
            <Route path="/" exact element={<Home />} />  
        </Routes>
    </main>

)

export default Content