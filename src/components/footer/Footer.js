import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__listas">
                <ul className="footer__lista">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'navLink__active' : '')}>Inicio</NavLink>
                    <NavLink to="/pinabetes" className={({ isActive }) => (isActive ? 'navLink__active' : '')}>Pinabetes</NavLink>
                    <NavLink to="/ubicaciones" className={({ isActive }) => (isActive ? 'navLink__active' : '')}>Ubicaciones</NavLink>
                    <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'navLink__active' : '')}>Contacto</NavLink>
                    <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'navLink__active' : '')}>Nosotros</NavLink>
                </ul>
                <div className="footer__botones">
                    <a
                        href="tel:+50257703967"
                        className="contacto__boton contacto__boton--telefono footer__boton"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Llamar a Guatemala, Guatemala
                        <i className="fa-solid fa-phone-flip"></i>
                    </a>
                    <a
                        href="tel:+50241800513"
                        className="contacto__boton contacto__boton--telefono footer__boton"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Llamar a Quetzaltenango, Guatemala
                        <i className="fa-solid fa-phone-flip"></i>
                    </a>
                </div>
            </div>
            {/* <p className="footer__derechos">
                2021 Todos los derechos reservados
            </p> */}
        </footer>
    )
}
