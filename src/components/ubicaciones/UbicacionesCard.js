import { useState } from 'react';
import { Modal } from '../modal/Modal.js';

export const UbicacionesCard = ({ path, departamento, municipio, direccion, pathMaps }) => {

    const [isModalActive, setIsModalActive] = useState(false);

    const removeModal = () => setIsModalActive(false);

    const alt = `Pinabetes ${ departamento }`;

    return (
        <div className='Ubicaciones__card animate__animated animate__fadeIn'>
            <img 
                src={ path } 
                alt={ alt }
                className='Ubicaciones__image'
                onClick={()=>{
                    setIsModalActive( true )
                }}
            />
            <div className='Ubicaciones__data'>
                <p>Departamento: { departamento } </p>
                <p>Municipio: { municipio } </p>
                <p>Dirección: { direccion } </p>
            </div>
            <a 
                className='Ubicaciones__maps'
                href={ pathMaps }
                rel="noreferrer"
                target='_blank'
            >
                <p>Abrir google maps</p>
                <i className="fa-solid fa-map-location-dot Ubicaciones__icon"></i>
            </a>
            {
                isModalActive && <Modal path={ path } removeModal={ removeModal } alt={ alt } />
            }
        </div>
    )
}
