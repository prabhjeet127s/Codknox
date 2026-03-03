import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setdigit1, setdigit2, setdigit3, setans } from '../Redux/Slice/Calculatorslice'

const Plus = () => {

  const { digit1, digit2, digit3, ans } = useSelector(
    (state) => state.calculator
  )

  const handleclick = () => {
    const sum = digit1 * digit2 * digit3;
    dispatch(setans(sum))
  }
  const dispatch = useDispatch()


  return (
    <div className='flex flex-col justify-center items-center  bg-pink-100 h-screen' >
      <div className='flex flex-col justify-center items-center bg-white h-[60%] w-[60%]  gap-5'  >
        <div className='flex gap-2' >
          <label htmlFor="">Number 1:</label>
          <input type="text"
          value={digit1}
            placeholder='enter first  number '
            className='border-2 px-2.5 h-10 rounded-2xl w-3xs '
            onChange={(e) => dispatch(setdigit1(Number(e.target.value)))}
          />
        </div>


        <div className='flex gap-2'  >
          
          <label htmlFor="">Number 2:</label>
          <input type="text"
          value={digit2}
            placeholder='enter second number'
            className='border-2 px-2.5 h-10 rounded-2xl w-3xs '
            onChange={(e) => dispatch(setdigit2(Number(e.target.value)))} />
        </div>

        <div className='flex gap-2'  >
          <label htmlFor="">Number 3:</label>
          <input type="text"
          value={digit3}
            placeholder='enter third number'
            className='border-2 h-10 px-2.5 rounded-2xl w-3xs'
            onChange={(e) => dispatch(setdigit3(Number(e.target.value)))} />
        </div>

        <button className='  shadow-2xl  hover:text-blue-500 transition duration-300 border-2 p-3 px-5 rounded-2xl' onClick={handleclick}  >Add Numbers</button>
        <h3>Result :{ans}</h3>


      </div>


    </div>
  )
}

export default Plus
