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
                <NavLink 
                    to="/" 
                    // className='navBar__item--escritorio'
                    className={ ({ isActive }) => 'navBar__item--escritorio' + ( isActive ? 'navBar__item--escritorio navBar__item--active' : '') }
                >
                    Inicio
                </NavLink>
                <NavLink 
                    to="/pinabetes" 
                    // className='navBar__item--escritorio'
                    className={ ({ isActive }) => 'navBar__item--escritorio' + ( isActive ? 'navBar__item--escritorio navBar__item--active' : '') }
                >
                    Pinabetes
                </NavLink>
                <NavLink 
                    to="/ubicaciones" 
                    // className='navBar__item--escritorio'
                    className={ ({ isActive }) => 'navBar__item--escritorio' + ( isActive ? 'navBar__item--escritorio navBar__item--active' : '') }
                >
                    Ubicaciones
                </NavLink>
                <NavLink 
                    to="/contacto" 
                    // className='navBar__item--escritorio'
                    className={ ({ isActive }) => 'navBar__item--escritorio' + ( isActive ? 'navBar__item--escritorio navBar__item--active' : '') }
                >
                    Contacto
                </NavLink>
                <NavLink 
                    to="/nosotros" 
                    // className='navBar__item--escritorio'
                    className={ ({ isActive }) => 'navBar__item--escritorio' + ( isActive ? 'navBar__item--escritorio navBar__item--active' : '') }
                >
                    Nosotros
                </NavLink>
            </ul>
        </div>
    )
}
