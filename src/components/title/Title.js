
import React from 'react'
import './Title.css'

export const Title = ( { title, path, className }) => {
    return (
        <div className={`title ${className ? className : ''}`}>
            {
                path && <img src={ path } alt='logo' className='title__img'/>
            }
            <h1 className='title__text'>{ title }</h1>
        </div>
    )
}
 