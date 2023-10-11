import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

const ReduxCounter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleDec = () => {
        dispatch(decrement())
    }

    const handleInc = () => {
        dispatch(increment())
    }

    const handleIncByAmount = () => {
        dispatch(incrementByAmount(5))
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleIncByAmount}>By amount</button>
        </>
    )
}

export default ReduxCounter