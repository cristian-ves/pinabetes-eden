import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBarList = ( { navBarList, toggleNavBarList } ) => {
    return (
        <ul ref={ navBarList } className='navBar__list'>
            <NavLink 
                onClick={ toggleNavBarList }
                to="/"
                className={ ({ isActive }) => 'navBar__item ' + ( isActive ? 'navBar__item--active' : '') }
            >
                Inicio
            </NavLink>
            <NavLink 
                onClick={ toggleNavBarList }
                to="/pinabetes"
                className={ ({ isActive }) => 'navBar__item ' + ( isActive ? 'navBar__item--active' : '') }
            >
                Pinabetes
            </NavLink>
            <NavLink 
                onClick={ toggleNavBarList }
                to="/ubicaciones"
                className={ ({ isActive }) => 'navBar__item ' + ( isActive ? 'navBar__item--active' : '') }
            >
                Ubicaciones
            </NavLink>
            <NavLink 
                onClick={ toggleNavBarList }
                to="/contacto"
                className={ ({ isActive }) => 'navBar__item ' + ( isActive ? 'navBar__item--active' : '') }
            >
                Contacto
            </NavLink>
            <NavLink 
                onClick={ toggleNavBarList }
                to="/nosotros"
                className={ ({ isActive }) => 'navBar__item ' + ( isActive ? 'navBar__item--active' : '') }
            >
                Nosotros
            </NavLink>
        </ul>
    )
}
