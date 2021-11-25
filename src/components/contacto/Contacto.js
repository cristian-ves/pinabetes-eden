import React from 'react'
import { NavLink } from 'react-router-dom'
import { Title } from '../title/Title.js'

import './Contacto.css'

export const Contacto = () => {
    return (
        <main className="contacto animate__animated animate__fadeIn">
            <Title title="Contacto"/>
            <p className="contacto__info">Puedes escribirnos a nuestro whatsapp.</p>
            <a 
                href="https://api.whatsapp.com/send/?phone=%2B50242431770&text&app_absent=0" 
                className="contacto__boton contacto__boton--whatsapp"
                target="_blank"
                rel="noreferrer"
            >
                +502 42431770
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <p className="contacto__info">O también llamar a uno de los siguientes números.</p>
            <a 
                href="tel:+50242431770"
                className="contacto__boton contacto__boton--telefono"
                target="_blank"
                rel="noreferrer"
            >
                +502 42431770
                <i className="fa-solid fa-phone-flip"></i>
            </a>
            <a 
                href="tel:+50242431770"
                className="contacto__boton contacto__boton--telefono"
                target="_blank"
                rel="noreferrer"
            >
                +502 42431770
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
