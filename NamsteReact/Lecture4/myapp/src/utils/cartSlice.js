import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[], 
    }, 
    reducers:{
        addItem:(state, action) =>{
            // muating the state here
            state.items.push(action.payload); 
        }, 
        removeItem:(state, action) =>{
            state.items.pop();
        }, 
        clearCart:(state)=>{
            // You can not do state = []
            // beacuse it means you change the local state 
            // but you can return [] 
            // state.items.length = 0;
            return { items: []};
        },
    }
})
export const { addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer; 