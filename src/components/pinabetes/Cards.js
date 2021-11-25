

import React from 'react';
import { Card } from './Card.js';

export const Cards = ({ arreglo, selectedRadioButton }) => {
    

    return (
        <div 
            className="card__container"
        >
            
            {
                arreglo.map( ({ calidad, indice, precio, tamaño }, i) =>{
                    return (<Card
                        key={i+1}
                        path={ `./assets/img/${calidad + indice}.jpeg` }
                        alt={ `Pinabete ${ i + 1 }` }
                        calidad={ calidad }
                        precio={ precio }
                        tamaño={ tamaño }
                        selectedRadioButton={ selectedRadioButton}
                    />)
                })
            }
        </div>
    )
}
