import { useState } from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    function descrement() {
        setCounter(counter - 1)
    }


    return (
        <>
            <h1>
                {counter}
            </h1>
            <button type="button" onClick={increment}>increment</button>
            <button type="button" onClick={descrement}>decrement -</button>
        </>
    )
}