import React, { useState } from 'react'

import { PINABETES_DATA } from '../../data/PINABETES_DATA.js';
import { Title } from '../title/Title.js'
import { Cards } from './Cards.js';
import './Pinabetes.css'
import { RadioButton } from './RadioButton.js';

export const Pinabetes = () => {

    const [PINABETES_B, PINABETES_PLUS] = PINABETES_DATA();

    const [selectedRadioButton, setSelectedRadioButton] = useState('+');


    return (
        <main className='pinabetes animate__animated animate__fadeIn'>
            <div className="pinabetes__container2">
                <Title title='Pinabetes' className="pinabetes__title" />
                <p className="pinabetes__info">
                    El pinabete es un árbol que se encuentra mayormente en el territorio de Guatemala, comúnmente utilizado para adornar nuestras casas para navidad
                </p>
            </div>
            <div className="pinabetes__container">
                <h3 className='calidad'>Calidad</h3>
                <RadioButton
                    setSelectedRadioButton={ setSelectedRadioButton}
                    selectedRadioButton={ selectedRadioButton }
                />
                {
                    (selectedRadioButton === 'B') ?
                        <p className='precios'>Los precios pueden ser de Q250.00 a Q500.00. Varían según la forma y tamaño del árbol. Los puedes encontrar en Quetzaltenango</p>:
                        <p className='precios'>El precio es de Q100.00 por pie. Los puedes encontrar en la ciudad de Guatemala</p>

                }
                {
                    ( selectedRadioButton === 'B' ) ?
                        <Cards arreglo={ PINABETES_B } selectedRadioButton={ selectedRadioButton} />:
                        <Cards arreglo={ PINABETES_PLUS } selectedRadioButton={ selectedRadioButton } />
                }
            </div>
            
        </main>
    )
}
