import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBarContent = ({ toggleNavBarList }) => {
    return (
        <div className='navBar__content'>
            <div className='navBar__logo'>
                <img src='/assets/img/Pinabete.png'alt='Pinabete'/>
                <NavLink to="/" className=''>El Edén</NavLink>
            </div>
            <i 
                className="fa-solid fa-bars navBar__hamburguesa"
                onClick= { toggleNavBarList }
            ></i>
            <ul className='navBar__links--escritorio'>
                <NavLink to="/" className=''>Inicio</NavLink>
                <NavLink to="/" className=''>Pinabetes</NavLink>
                <NavLink to="/" className=''>Ubicaciones</NavLink>
                <NavLink to="/" className=''>Contacto</NavLink>
                <NavLink to="/" className=''>Nosotros</NavLink>
            </ul>
        </div>
    )
}
