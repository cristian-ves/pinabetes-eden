import React, { useState } from 'react'
import { Modal } from '../modal/Modal.js';

export const Card = ({ path, alt, calidad, selectedRadioButton, precio, tamaño}) => {

    const [isModalActive, setIsModalActive] = useState(false);

    const removeModal = () =>{
        setIsModalActive( false );
    }

    return (
        <div
            className="card"
        >
            <img 
                src={ path }
                alt={ alt }
                onClick={()=>{
                    setIsModalActive( true );
                }}
                className="card__img"
            />
            <div className="card__content">
                <p>Calidad: { calidad }</p>
                {
                    ( selectedRadioButton === '+' && <p>Precio: Q{ precio }.00</p> )
                }
                {
                    ( selectedRadioButton === '+' && <p>tamaño: { tamaño } pies</p> )
                }
            </div>
            {
                isModalActive && <Modal 
                    path={ path }
                    alt={ `Pinabete calidad ${ calidad } ${(tamaño) ? `de ${ tamaño } pies`: ''}` }
                    removeModal={ removeModal }
                />
            }
        </div>
    )
}
