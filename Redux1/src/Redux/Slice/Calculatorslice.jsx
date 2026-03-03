import { createSlice } from "@reduxjs/toolkit";
const Calculatorslice= createSlice({
    name:"calculator",
    initialState:{
        digit1:0,
        digit2:0,
        digit3:0,
        ans:0
    },  
    reducers:{
        setdigit1:(state,action)=>{
            state.digit1=action.payload
        },
        setdigit2:(state,action)=>{
            state.digit2=action.payload
        },
        setdigit3:(state,action)=>{
            state.digit3=action.payload
        },
        setans:(state,action)=>{
            state.ans=action.payload
        }
    }
})
export const {setdigit1,setdigit2,setdigit3,setans}=Calculatorslice.actions
export default Calculatorslice.reducer


