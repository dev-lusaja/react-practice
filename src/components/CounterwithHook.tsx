import React, {useState} from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterwithHook = () => {

    const {counter, updateCounter} = useCounter();

    return (
        <>
            <h3>Contador with Hook <small>{ counter }</small></h3>
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
