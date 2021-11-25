import { Title } from "../title/Title.js"

import './Ubicaciones.css'
import { UbicacionesCard } from "./UbicacionesCard.js"

export const Ubicaciones = () => {
    return (
        <main className='Ubicaciones' >
            <Title title="Ubicaciones"/>
            <UbicacionesCard 
                path='./assets/img/xela.jpeg' 
                pathMaps='https://goo.gl/maps/vTGrF2My6hNXt2GNA'
                departamento='Quetzaltenango'
                municipio='Quetzaltenango'
                direccion='Plaza Ciani, 4a calle'
            />
            <UbicacionesCard 
                path=''
                pathMaps='https://goo.gl/maps/KkB6o2Ju1GLqGMXT9'
                departamento='Guatemala'
                municipio='Guatemala'
                direccion='??????????????'
            />
        </main>
    )
}
