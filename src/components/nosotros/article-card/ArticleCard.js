import React from 'react'

import './ArticleCard.css'

export const ArticleCard = ({ titulo, descripcion }) => {
    return (
        <div className="articleCard">
            <h2 className="articleCard__titulo">{ titulo }</h2>
            <p className="articleCard__descripcion">{ descripcion }</p>
        </div>
    )
}
