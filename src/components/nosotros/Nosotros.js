import React from 'react'
import { ARTICLES } from '../../data/ARTICLES.js'
import { Title } from '../title/Title.js'
import { ArticleCard } from './article-card/ArticleCard.js'

import './Nosotros.css'

export const Nosotros = () => {
    return (
        <main className="nosotros animate__animated animate__fadeIn">
            <Title 
                title="Nosotros"
                className="title--nosotros"
            />
            {
                ARTICLES().map(({ titulo, descripcion }, indice )=> {
                    return(
                        <ArticleCard 
                            titulo={ titulo }
                            key={ indice }
                            descripcion={ descripcion }
                        />)
                })
            }
        </main>
    )
}
