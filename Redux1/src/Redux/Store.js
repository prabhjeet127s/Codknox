import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './Slice/Calculatorslice'

export const store = configureStore({


  reducer: {
    
    calculator: calculatorReducer


    
  },

})
