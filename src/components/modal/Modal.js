import React from 'react'
import './Modal.css'

export const Modal = ({ path, removeModal, alt }) => {

    return (
        <div className='modal'>
            <i 
                onClick={ removeModal }
                className="fa-solid fa-xmark modal__close"
            ></i>
            <img src={ path } alt={ alt } className="modal__img"/>
            <h2 className="modal__title">{ alt }</h2>
        </div>
    )
}
 