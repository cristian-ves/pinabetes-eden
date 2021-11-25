
import { NavLink } from 'react-router-dom';

import { Slider } from './Slider.js'
import './HomePage.css';
import { Title } from '../title/Title.js';


export const HomePage = ( ) => {

    return (
        <main className='home animate__animated animate__fadeIn'>

            <Title path='./assets/img/title.png' title='Pinabetes El Edén'/>
            
            <Slider />

            <article className='home__article'>
                <p className='home__paragraph'>¡Ya se siente la navidad! ¿Estas pensando en comprar un árbol con ese olor tan distinguido? ¡Nosotros lo tenemos! En pinabetes El Edén encontrarás ese arbolito que tanto deseas y que tantos recuerdos te trae.</p>
            </article>

            <NavLink to="/pinabetes" className='boton-pinabetes '>Ver arboles de navidad <i style={{paddingLeft: '0.5rem'}} className="fa-solid fa-right-from-bracket"></i></NavLink>
            
        </main>
    )
}
