import { Route, Routes, BrowserRouter } from "react-router-dom";

import { NavBar } from "../components/navbar/NavBar.js";
import { HomePage } from "../components/home/HomePage.js";
import { Pinabetes } from "../components/pinabetes/Pinabetes.js";
import { Ubicaciones } from "../components/ubicaciones/Ubicaciones.js";
import { Contacto } from "../components/contacto/Contacto.js";
import { Nosotros } from "../components/nosotros/Nosotros.js";
import { Footer } from "../components/footer/Footer.js";

import './AppRouter.css'


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <div className='App'>
                <NavBar/>
                <Routes>
                    
                    <Route path='/pinabetes' element={<Pinabetes />}/>
                    <Route path='/ubicaciones' element={<Ubicaciones />}/>
                    <Route path='/contacto' element={<Contacto />}/>
                    <Route path='/nosotros' element={<Nosotros />}/>
                    <Route index element={<HomePage />}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
