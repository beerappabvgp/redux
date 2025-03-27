import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from '../redux/CounterSlice'

export const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <h2>Count is: {count}</h2>
        </div>
    )
}

