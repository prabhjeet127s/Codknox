import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setNum1, setnum2, setresult } from '../Redux/Slice/Calculators'



const Multi = () => {
    const { num1, num2, result } = useSelector(
        (state) => state.calculator
    )
    const handleclick=()=>{

        const sum=num1*num2;
        dispatch(setresult(sum))

    }
    const dispatch = useDispatch()
    return (
        <div className='border-3 p-3 m-56  bg-blue-400' >

            <input type="text"
                onChange={(e) => dispatch(setNum1(Number(e.target.value)))}
                placeholder='enter num1'
            />

            <input type=""
                onChange={(e) => dispatch(setnum2(Number(e.target.value)))}
                placeholder='enter num2' />

                <button onClick={handleclick}  > click me</button>
                <h3>{result}</h3>
        </div>

        
    )
}

export default Multi
