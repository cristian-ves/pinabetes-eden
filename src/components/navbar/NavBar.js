
import { NavLink } from 'react-router-dom';

import { useToggleHamburguer } from './useToggleHamburguer.js';
import './NavBar.css';

export const NavBar = () => {

    const { toggleNavBarList, navBarList } = useToggleHamburguer();
    
    return (
        <header>
            <nav className='navBar'>
                <div className='navBar__content'>
                    <div className='navBar__logo'>
                        <img src='/assets/img/Pinabete.png'alt='Pinabete'/>
                        <h3>El Edén</h3>
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
                <ul ref={ navBarList } className='navBar__list'>
                    <NavLink to="/" className='navBar__item'>Inicio</NavLink>
                    <NavLink to="/" className='navBar__item'>Pinabetes</NavLink>
                    <NavLink to="/" className='navBar__item'>Ubicaciones</NavLink>
                    <NavLink to="/" className='navBar__item'>Contacto</NavLink>
                    <NavLink to="/" className='navBar__item'>Nosotros</NavLink>
                </ul>
                <img className='navBar__luces' src='/assets/img/Luces.png' alt='Luces'/>
            </nav>
        </header>
    )
}
