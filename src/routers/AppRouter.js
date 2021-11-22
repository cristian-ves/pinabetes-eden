import { Route, Routes, BrowserRouter } from "react-router-dom"

import { NavBar } from "../components/navbar/NavBar.js"
import { HomePage } from "../components/home/HomePage.js"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <div >
                <Routes>
                    
                    <Route path='/' element={<HomePage />}/>
                </Routes>
            </div>
            
        </BrowserRouter>
    )
}
