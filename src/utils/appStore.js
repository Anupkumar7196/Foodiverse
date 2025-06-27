import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { useReducer } from "react";
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
       
    },
});
export default appStore;


// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default appStore;
