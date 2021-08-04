import React, {useState} from 'react'

export const useCounter = (initial: number = 0) => {
    const [counter, setCounter] = useState(initial)


    const updateCounter = (value: number) => {
        setCounter(counter + value)
    }

    return {
        counter,
        updateCounter
    }
}
