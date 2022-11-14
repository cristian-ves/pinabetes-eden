import React from 'react'
import { NavLink } from 'react-router-dom'
import { Title } from '../title/Title.js'

import './Contacto.css'

export const Contacto = () => {
    return (
        <main className="contacto animate__animated animate__fadeIn">
            <Title title="Contacto"/>
            <p className="contacto__info">Puedes llamar a nuestro número</p>
            <a 
                href="tel:+50257703967"
                className="contacto__boton contacto__boton--telefono"
                target="_blank"
                rel="noreferrer"
            >
                Guatemala, Guatemala
                <i className="fa-solid fa-phone-flip"></i>
            </a>
            <a 
                href="tel:+50241800513"
                className="contacto__boton contacto__boton--telefono"
                target="_blank"
                rel="noreferrer"
            >
                Quetzaltenango, Guatemala
                <i className="fa-solid fa-phone-flip"></i>
            </a>
            <p className="contacto__info">O visitarnos.</p>
            <NavLink 
                to="/ubicaciones"
                className="contacto__boton contacto__boton--ubicaciones"
            >
                Ubicaciones
                <i className="fa-solid fa-location-dot"></i>
            </NavLink>

        </main>
    )
}
