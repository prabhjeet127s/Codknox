import React from 'react'
import { useDispatch, useSelector } from "react-redux"

import { setNum1, setnum2, setresult } from '../Redux/Slice/Calculators'
const Add = () => {
    const { num1, num2, result } = useSelector(
        (state) => state.calculator
    );
    const dispatch = useDispatch();

    const handleclick = () => {
        const sum = num1 + num2;
        dispatch(setresult(sum))
    }
    return (
        <div className='border-3 m-28 p-3 bg-blue-200' >
            <h3>Calculator</h3>

            <input
                type='number'
                value={num1}
                onChange={(e) => dispatch(setNum1(Number(e.target.value)))}
                placeholder='Enter Number 1'
            />

            <input
                type='number'
                value={num2}
                onChange={(e => dispatch(setnum2(Number(e.target.value))))}
                placeholder='"Enter Number2'
            />
            <button
                onClick={handleclick}
                className='border-2 '
            >click result</button>
            <h2>result:{result}</h2>
        </div>
    )
}
export default Add
