import React, {useState} from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const updateCounter = ( value: number) => {
        setCounter(counter + value);
    }

    return (
        <>
            <h3>Contador <small>{ counter }</small></h3>
            <button 
                className="btn btn-primary"
                onClick={ () => updateCounter(1) }
            >
                +1
            </button>
            
            <button 
                className="btn btn-primary"
                onClick={ () => updateCounter(-1) }
            >
                -1
            </button>
        </>
    )
}
