import { createSlice } from "@reduxjs/toolkit";

//     name: 'cart',
//     initialState: {
//         items: []
//     },
//     reducers: {
//         addItem: (state, action) =>{
//             //mutating the state here
//             state.items.push(action.payload);
//         },
//         // find the logic to which item wnat to remove
//         removeItem: (state, action) =>{
//             state.items.pop();
//         },
//         clearCart: (state, action) =>{
//             return {items: []}; // this new [] will be replaced inside originalState = []
//         },
//     }
// });
// export const {addItem, removeItem, clearCart} = cartSlice.actions;
// export default cartSlice.reducer;

// Updated cart slice reducers


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Add item to cart
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // Find and remove one instance of the specific item
            const itemIdToRemove = action.payload.card.info.id;
            const indexToRemove = state.items.findIndex(item => item.card.info.id === itemIdToRemove);
            
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        },
        clearCart: (state) => {
            // state.items.length = 0;
            return {items: []};
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;