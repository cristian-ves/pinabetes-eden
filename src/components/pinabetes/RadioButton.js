import React from 'react'

export const RadioButton = ({ selectedRadioButton, setSelectedRadioButton }) => {

    const isRadioSelected = value => selectedRadioButton === value;

    const handleRadioClick = e => setSelectedRadioButton( e.currentTarget.value );
    
    return (
        <div className='radio'>
            <label 
                className= { (selectedRadioButton === 'B') ? 'radio__label ' : 'radio__label radio__label--active'}
            >
                <input 
                    className="radio__input" 
                    type="radio"
                    name='calidad'
                    value='+'
                    checked={ isRadioSelected( '+' ) }
                    onChange={ handleRadioClick }
                />
                El Edén +
            </label>
            <label
                className= { (selectedRadioButton === '+') ? 'radio__label ' : 'radio__label radio__label--active'}
            >
                <input 
                    className="radio__input" 
                    type="radio"
                    name='calidad'
                    value='B'
                    checked={ isRadioSelected( 'B' ) }
                    onChange={ handleRadioClick }
                />
                B
            </label>
        </div>
    )
}
