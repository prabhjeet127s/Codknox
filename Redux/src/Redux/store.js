import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './Slice/Calculators.jsx'


export const store = configureStore({
  reducer: {
    calculator:calculatorReducer
  },
})