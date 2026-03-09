import { createSlice } from "@reduxjs/toolkit";

const calculatorslice=createSlice({
    name:"calculator",
    initialState:{
        num1:0,
        num2:0,
        result:0,
    },
    reducers:{
        setNum1:(state,action)=>{
            state.num1=action.payload;
        },
        setnum2:(state,action)=>{
            state.num2=action.payload
        },
        setresult:(state,action)=>{
            state.result=action.payload
        }
    }
})
export const {setNum1,setnum2,setresult}=
calculatorslice.actions;
export default calculatorslice.reducer;