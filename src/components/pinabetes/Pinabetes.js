import React, { useState } from 'react'

import { PINABETES_DATA } from '../../data/PINABETES_DATA.js';
import { Title } from '../title/Title.js'
import { Cards } from './Cards.js';
import './Pinabetes.css'
import { RadioButton } from './RadioButton.js';

export const Pinabetes = () => {

    const [PINABETES_B, PINABETES_PLUS] = PINABETES_DATA();

    const [selectedRadioButton, setSelectedRadioButton] = useState('B');


    return (
        <main className='pinabetes animate__animated animate__fadeIn'>
            <Title title='Pinabetes'/>
            <h3 className='calidad'>Calidad</h3>
            <RadioButton
                setSelectedRadioButton={ setSelectedRadioButton}
                selectedRadioButton={ selectedRadioButton }
            />
            {
                (selectedRadioButton === 'B') ?
                    <p className='precios'>Los precios pueden ser de Q250.00 a Q500.00. Varían según la forma y tamaño del árbol.</p>:
                    <p className='precios'>El precio es de Q100.00 por pie.</p>

            }
            {
                ( selectedRadioButton === 'B' ) ?
                    <Cards arreglo={ PINABETES_B } selectedRadioButton={ selectedRadioButton} />:
                    <Cards arreglo={ PINABETES_PLUS } selectedRadioButton={ selectedRadioButton } />
            }
            
        </main>
    )
}
