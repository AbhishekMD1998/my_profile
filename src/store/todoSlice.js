import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    amount: null
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        
        addTodo: (state,action) => { 
            state.amount = action.payload;
         }
    }
    
})
export const {addTodo} = todoSlice.actions;
// console.log("redux data ",todoSlice);



export default todoSlice.reducer;